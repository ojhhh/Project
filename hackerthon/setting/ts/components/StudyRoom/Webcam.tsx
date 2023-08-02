import React, { useEffect, useRef } from 'react';

const Webcam = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current!.srcObject = stream;
        })
        .catch((err) => {
          console.log('Error occurred while accessing camera: ', err);
        });
    }
  }, []);

  return <video ref={videoRef} autoPlay playsInline />;
};

export default Webcam;
