const io = require("socket.io-client");
const mediasoupClient = require("mediasoup-client");

// 방 이름 설정
const roomName = window.location.pathname.split("/")[2];

// 서버 측과 동일한 네임스페이스 사용
const socket = io("/mediasoup");

socket.on("connection-success", ({ socketId, existsProducer }) => {
  console.log(socketId, existsProducer);
  getLocalStream();
});

let device;
let rtpCapabilities;
let producerTransport;
let consumerTransports = [];
let audioProducer;
let videoProducer;
let isProducer = false;

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

let audioParams;
let videoParams = { params };
let consumingTransports = [];

const streamSuccess = (stream) => {
  console.log("streamSuccess");
  localVideo.srcObject = stream;
  // 사용자 video stream 가져오기

  // audioParams = { track: stream.getAudioTracks()[0], ...audioParams };
  videoParams = { track: stream.getVideoTracks()[0], ...videoParams };

  joinRoom();
};

const joinRoom = () => {
  socket.emit("joinRoom", { roomName }, (data) => {
    console.log(`Router RTP Capavilities.. ${data.rtpCapabilities}`);

    rtpCapabilities = data.rtpCapabilities;

    createDevice();
  });
};

const getLocalStream = () => {
  navigator.mediaDevices
    .getUserMedia({
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
    })
    .then(streamSuccess)
    .catch((error) => {
      console.error(error.message);
    });
};

// const goConsume = () => {
//   goConnect(false);
// };

// const goConnect = (producerOrConsumer) => {
//   isProducer = producerOrConsumer;
//   device === undefined ? getRtpCapabilities() : goCreateTransport();
// };

// const goCreateTransport = () => {
//   isProducer ? createSendTransport() : createRecvTransport();
// };

const createDevice = async () => {
  try {
    device = new mediasoupClient.Device();

    await device.load({
      routerRtpCapabilities: rtpCapabilities,
    });

    console.log("Device RTP Capabilities", device.rtpCapabilities);

    // 장치가 로드되면 전송 생성
    createSendTransport();
  } catch (error) {
    console.error(error);
    if (error.name === "UnsupportedError") {
      console.warn("browser not supported");
    }
  }
};

// const getRtpCapabilities = () => {
//   // 서버에 라우터 rtp 기능 요청
//   // 서버의 소켓을 확인하고 서버가 rtp 기능을 포함하는 데이터 개체를 다시 보냄
//   socket.emit("createRoom", (data) => {
//     console.log(`Router RTP Capabilities ${data.rtpCapabilities}`);

//     rtpCapabilities = data.rtpCapabilities;

//     // 라우터에서 rtpCapability가 확보되면 디바이스 생성
//     createDevice();
//   });
// };

const createSendTransport = () => {
  socket.emit("createWebRtcTransport", { consumer: false }, ({ params }) => {
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
          ({ id, producersExist }) => {
            callback({ id });

            if (producersExist) {
              getProducers();
            }
          }
        );
      } catch (error) {
        console.error(error);
      }
    });

    connectSendTransport();
  });
};

const connectSendTransport = async () => {
  // console.log(audioParams);
  // audioProducer = await producerTransport.produce(audioParams);
  videoProducer = await producerTransport.produce(videoParams);

  // audioProducer.on("trackended", () => {
  //   console.log("audio track ended");
  // });

  // audioProducer.on("transportclose", () => {
  //   console.log("audio transport ended");
  // });

  videoProducer.on("trackended", () => {
    console.log("video track ended");
  });

  videoProducer.on("transportclose", () => {
    console.log("video transport ended");
  });
};

const signalNewConsumerTransport = async (remoteProducerId) => {
  // 동일한 사람이 보내면 false
  if (consumingTransports.includes(remoteProducerId)) {
    return;
  }
  consumingTransports.push(remoteProducerId);

  await socket.emit(
    "createWebRtcTransport",
    { consumer: true },
    ({ params }) => {
      if (params.error) {
        console.error(params.error);
        return;
      }

      let consumerTransport;

      try {
        consumerTransport = device.createRecvTransport(params);
      } catch (error) {
        console.error(error);
        return;
      }

      consumerTransport.on("connect", async ({ dtlsParameters }, callback) => {
        try {
          await socket.emit("transport-recv-connect", {
            // transportId: consumerTransport.id,
            dtlsParameters,
            serverConsumerTransportId: params.id,
          });
          callback();
        } catch (error) {
          console.error(error);
        }
      });
      connectRecvTransport(consumerTransport, remoteProducerId, params.id);
    }
  );
};

socket.on("new-producer", ({ producerId }) =>
  signalNewConsumerTransport(producerId)
);

const getProducers = () => {
  socket.emit("getProducers", (producerIds) => {
    producerIds.forEach(signalNewConsumerTransport);
  });
};

const connectRecvTransport = async (
  consumerTransport,
  remoteProducerId,
  serverConsumerTransportId
) => {
  await socket.emit(
    "consume",
    {
      rtpCapabilities: device.rtpCapabilities,
      remoteProducerId,
      serverConsumerTransportId,
    },
    async ({ params }) => {
      if (params.error) {
        console.log("cannot consume");
        return;
      }

      console.log(params);
      const consumer = await consumerTransport.consume({
        id: params.id,
        producerId: params.producerId,
        kind: params.kind,
        rtpParameters: params.rtpParameters,
      });

      consumerTransports = [
        ...consumerTransports,
        {
          consumerTransport,
          serverConsumerTransportId: params.id,
          producerId: remoteProducerId,
          consumer,
        },
      ];

      // consumer가 입장하면 새로운 캠화면 생성
      const newElem = document.createElement("div");
      newElem.setAttribute("id", `td-${remoteProducerId}`);

      if (params.kind == "audio") {
        newElem.innerHTML =
          '<audio id="' + remoteProducerId + '" audioplay></audio>';
      } else {
        newElem.setAttribute("class", "remoteVideo");
        newElem.innerHTML =
          '<video id="' +
          remoteProducerId +
          '" autoplay class="video"></video>';
      }

      videoContainer.appendChild(newElem);

      const { track } = consumer;

      // remoteVideo.srcObject = new MediaStream([track]);
      document.getElementById(remoteProducerId).srcObject = new MediaStream([
        track,
      ]);

      // socket.emit("consumer-resume");
      socket.emit("consumer-resume", {
        serverConsumerId: params.serverConsumerId,
      });
    }
  );
};

// 소켓 연결이 끊어지면 제거
socket.on("producer-closed", ({ remoteProducerId }) => {
  const producerToClose = consumerTransports.find(
    (transportData) => transportData.producerId === remoteProducerId
  );
  producerToClose.consumerTransport.close();
  producerToClose.consumer.close();

  consumerTransports = consumerTransports.filter(
    (transportData) => transportData.producerId !== remoteProducerId
  );

  videoContainer.removeChild(document.getElementById(`td-${remoteProducerId}`));
});

// btnLocalVideo.addEventListener("click", getLocalStream);
// btnRtpCapabilities.addEventListener("click", getRtpCapabilities);
// btnDevice.addEventListener("click", createDevice);
// btnCreateSendTransport.addEventListener("click", createSendTransport);
// btnConnectSendTransport.addEventListener("click", connectSendTransport);
// btnRecvSendTransport.addEventListener("click", goConsume);
// btnConnectRecvTransport.addEventListener("click", connectRecvTransport);
