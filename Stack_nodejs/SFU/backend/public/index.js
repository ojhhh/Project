const io = require("socket.io-client");
const mediasoupClient = require("mediasoup-client");

// 서버 측과 동일한 네임스페이스 사용
const socket = io("/mediasoup");

socket.on("connection-success", (socketId) => {
  // console.log(socketId);
});

let device;
let rtpCapabilities;
let producerTransport;
let consumerTransport;
let producer;
let consumer;

let params = {
  // mediasoup params가 들어갈 곳
  encoding: [
    {
      rid: "r0",
      maxBitrate: 100000,
      scalabilityMode: "S1T3",
    },
    {
      rid: "r1",
      maxBitrate: 300000,
      scalabilityMode: "S1T3",
    },
    {
      rid: "r2",
      maxBitrate: 900000,
      scalabilityMode: "S1T3",
    },
  ],
  codecOptions: {
    videoGoogleStartBitrate: 1000,
  },
};

const streamSuccess = async (stream) => {
  localVideo.srcObject = stream;
  // 사용자 video stream 가져오기
  const track = stream.getVideoTracks()[0];
  params = {
    track,
    ...params,
  };
};

const getLocalStream = () => {
  navigator.getUserMedia(
    {
      audio: false,
      video: {
        width: {
          min: 640,
          max: 1920,
        },
        height: {
          min: 400,
          max: 1080,
        },
      },
      // 2개의 콜백함수를 사용. 성공했을때나 실패했을때 결과 반환
    },
    streamSuccess,
    (error) => {
      console.error(error);
    }
  );
};

const createDevice = async () => {
  try {
    device = new mediasoupClient.Device();

    await device.load({
      routerRtpCapabilities: rtpCapabilities,
    });
    console.log("RTP Capabilities", device.rtpCapabilities);
  } catch (error) {
    console.error(error);
    if (error.name === "UnsupportedError") {
      console.warn("browser not supported");
    }
  }
};

const getRtpCapabilities = () => {
  socket.emit("getRtpCapabilities", (data) => {
    console.log(`Router RTP Capabilities ${data.rtpCapabilities}`);

    rtpCapabilities = data.rtpCapabilities;
  });
};

const createSendTransport = () => {
  socket.emit("createWebRtcTransport", { sender: true }, ({ params }) => {
    if (params.error) {
      console.error(params.error);
      return;
    }
    console.log(params);

    producerTransport = device.createSendTransport(params);

    producerTransport.on("connect", async ({ dtlsParameters }, callback) => {
      try {
        await socket.emit("transport-connect", {
          // transportid: producerTransport.id,
          dtlsParameters,
        });
        callback();
      } catch (error) {
        console.error(error);
      }
    });

    producerTransport.on("produce", async (parameters, callback) => {
      try {
        await socket.emit(
          "transport-produce",
          {
            // transportId: producerTransport.id,
            kind: parameters.kind,
            rtpParameters: parameters.rtpParameters,
            appData: parameters.appData,
          },
          ({ id }) => {
            callback({ id });
          }
        );
      } catch (error) {
        console.error(error);
      }
    });
  });
};

const connectSendTransport = async () => {
  console.log("connectSendTransport");
  console.log(producerTransport);
  producer = await producerTransport.produce(params);

  producer.on("trackended", () => {
    console.log("track ended");
  });

  producer.on("transportclose", () => {
    console.log("track ended");
  });
};

const createRecvTransport = async () => {
  // 동일한 사람이 보내면 false
  await socket.emit(
    "createWebRtcTransport",
    { sender: false },
    ({ params }) => {
      if (params.error) {
        console.error(params.error);
        return;
      }

      console.log(params);

      consumerTransport = device.createRecvTransport(params);

      consumerTransport.on("connect", async ({ dtlsParameters }, callback) => {
        try {
          await socket.emit("transport-recv-connect", {
            // transportId: consumerTransport.id,
            dtlsParameters,
          });
          callback();
        } catch (error) {
          console.error(error);
        }
      });
    }
  );
};

const connectRecvTransport = async () => {
  await socket.emit(
    "consume",
    {
      rtpCapabilities: device.rtpCapabilities,
    },
    async ({ params }) => {
      if (params.error) {
        console.log("cannot consume");
        return;
      }

      console.log(params);
      consumer = await consumerTransport.consume({
        id: params.id,
        producerId: params.producerId,
        kind: params.kind,
        rtpParameters: params.rtpParameters,
      });

      const { track } = consumer;

      remoteVideo.srcObject = new MediaStream([track]);

      socket.emit("consumer-resume");
    }
  );
};

btnLocalVideo.addEventListener("click", getLocalStream);
btnRtpCapabilities.addEventListener("click", getRtpCapabilities);
btnDevice.addEventListener("click", createDevice);
btnCreateSendTransport.addEventListener("click", createSendTransport);
btnConnectSendTransport.addEventListener("click", connectSendTransport);
btnRecvSendTransport.addEventListener("click", createRecvTransport);
btnConnectRecvTransport.addEventListener("click", connectRecvTransport);
