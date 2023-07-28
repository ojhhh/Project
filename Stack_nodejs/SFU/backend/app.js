import express from "express";
import https from "httpolyglot";
import fs from "fs";
import path from "path";
import { Server } from "socket.io";
import mediasoup from "mediasoup";

const __dirname = path.resolve();

const app = express();

app.get("/", (req, res) => {
  res.send("mediasoup test");
});

app.use("/sfu", express.static(path.join(__dirname, "public")));

const options = {
  key: fs.readFileSync("./server/ssl/key.pem", "utf-8"),
  cert: fs.readFileSync("./server/ssl/cert.pem", "utf-8"),
};

const httpsServer = https.createServer(options, app);

httpsServer.listen(3000, () => {
  console.log("server on");
});

const io = new Server(httpsServer);

const peers = io.of("/mediasoup");

let worker;
let router; // router를 사용하여 방을 만듬
let producerTransport;
let consumerTransport;
let producer;
let consumer;

const createWorker = async () => {
  worker = await mediasoup.createWorker({
    rtcMinPort: 2000,
    rtcMaxPort: 2100,
  });
  console.log(`worker pid ${worker.pid}`);

  worker.on("died", (error) => {
    console.log("mediasoup worker has died");
    // 2초 뒤에 종료
    setTimeout(() => {
      process.exit(1), 2000;
    });
  });
  return worker;
};

worker = createWorker();

const mediaCodecs = [
  { kind: "audio", mimeType: "audio/opus", clockRate: 48000, channels: 2 },
  {
    kind: "video",
    mimeType: "video/VP8",
    clockRate: 90000,
    paramethers: {
      "x-google-start-bitrate": 1000,
    },
  },
];

peers.on("connection", async (socket) => {
  // console.log(socket.id);
  socket.emit("connection-success", {
    socketId: socket.id,
    existsProducer: producer ? true : false,
  });

  socket.on("disconnect", () => {
    console.log("peer disconnected");
  });

  socket.on("createRoom", async (callback) => {
    if (router === undefined) {
      router = await worker.createRouter({ mediaCodecs });
      console.log(`Router ID : ${router.id}`);
    }
    getRtpCapabilities(callback);
  });

  const getRtpCapabilities = (callback) => {
    const rtpCapabilities = router.rtpCapabilities;

    callback({ rtpCapabilities });
  };

  // router = await worker.createRouter({ mediaCodecs });

  // socket.on("getRtpCapabilities", (callback) => {
  //   const rtpCapabilities = router.rtpCapabilities;
  //   console.log("rtp Capabilities", rtpCapabilities);
  //   callback({ rtpCapabilities });
  // });

  socket.on("createWebRtcTransport", async ({ sender }, callback) => {
    console.log(`is this a sender require ${sender}`);
    if (sender) {
      producerTransport = await createWebRtcTransport(callback);
    } else {
      consumerTransport = await createWebRtcTransport(callback);
    }
  });

  socket.on("transport-connect", async ({ dtlsParameters }) => {
    console.log("DTLS PARAMS", { dtlsParameters });
    await producerTransport.connect({ dtlsParameters });
  });

  socket.on(
    "transport-produce",
    async ({ kind, rtpParameters, appData }, callback) => {
      producer = await producerTransport.produce({
        kind,
        rtpParameters,
      });

      console.log("Producer ID: ", producer.id, producer.kind);

      producer.on("transportclose", () => {
        console.log("transport for this producer closed");
        producer.close();
      });

      callback({
        id: producer.id,
      });
    }
  );
  socket.on("transport-recv-connect", async ({ dtlsParameters }) => {
    console.log(`DTLS PARAMS: ${dtlsParameters}`);
    await consumerTransport.connect({ dtlsParameters });
  });

  socket.on("consume", async ({ rtpCapabilities }, callback) => {
    try {
      if (
        router.canConsume({
          producerId: producer.id,
          rtpCapabilities,
        })
      ) {
        consumer = await consumerTransport.consume({
          producerId: producer.id,
          rtpCapabilities,
          paused: true,
        });

        consumer.on("transportclose", () => {
          console.log("transport close from consumer");
        });
        consumer.on("producerclose", () => {
          console.log("producer of consumer closed");
        });

        const params = {
          id: consumer.id,
          producerId: producer.id,
          kind: consumer.kind,
          rtpParameters: consumer.rtpParameters,
        };
        callback({ params });
      }
    } catch (error) {
      console.error(error);
      callback({
        params: {
          error: error,
        },
      });
    }
  });

  socket.on("consumer-resume", async () => {
    console.log("consumer resume");
    await consumer.resume();
  });
});

const createWebRtcTransport = async (callback) => {
  try {
    const webRtcTransport_options = {
      listenIps: [
        {
          ip: "0.0.0.0",
          announcedIp: "127.0.0.1",
        },
      ],
      enableUdp: true,
      enableTcp: true,
      preferUdp: true,
    };

    let transport = await router.createWebRtcTransport(webRtcTransport_options);

    transport.on("dtlsstatechange", (dtlsState) => {
      if (dtlsState === "closed") {
        transport.close();
      }
    });

    transport.on("close", () => {
      console.log("transport closed");
    });

    callback({
      params: {
        id: transport.id,
        iceParameters: transport.iceParameters,
        iceCandidates: transport.iceCandidates,
        dtlsParameters: transport.dtlsParameters,
      },
    });

    return transport;
  } catch (error) {
    console.error(error);
    callback({
      params: {
        error: error,
      },
    });
  }
};
