import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import KonvaCanvas from "./KonvaCanvas";

const TwoDCanvas = () => {
  const clothType = useSelector((state) => state.cloth.clothType);
  const clothColor = useSelector((state) => state.cloth.clothColor);
  const [canvas, setCanvas] = useState(null);

  // 원본 이미지를 저장할 변수를 생성합니다.
  const [originalImageData, setOriginalImageData] = useState(null);

  useEffect(() => {
    const canvasElement = document.getElementById("canvas");
    setCanvas(canvasElement);
  }, []);

  useEffect(() => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const backgroundImage = new Image();
    backgroundImage.src = `${clothType}.png`;
    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 200, 0, 780, 750);

      // 원본 이미지 데이터를 가져와 저장합니다.
      const imageData = ctx.getImageData(200, 0, 780, 750);
      setOriginalImageData(imageData);
    };
  }, [canvas, clothType]);

  useEffect(() => {
    if (!canvas || !originalImageData) return;

    const ctx = canvas.getContext("2d");

    // 원본 이미지를 복원하고 새로운 필터를 적용합니다.
    ctx.putImageData(originalImageData, 200, 0);
    applyColorFilter(clothColor);
  }, [canvas, clothColor, originalImageData]);

  const applyColorFilter = (color) => {
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(200, 0, 780, 750);
    const data = imageData.data;

    switch (color) {
      // 필터 조건을 이전에 받은 매개변수로 변경합니다.
      case "red":
        adjustImageData(data, -60, 0.1, 0.2);
        break;
      case "yellow":
        adjustImageData(data, 100, 0.8, 0.2);
        break;
      case "green":
        adjustImageData(data, -150, 0.9, 0.5);
        break;
      case "blue":
        adjustImageData(data, -150, 0.6, 1);
        break;
      case "orange":
        adjustImageData(data, 100, 0.5, 0.2);
        break;
      case "navy":
        adjustImageData(data, -150, 0.1, 0.7);
        break;
      default:
        break;
    }
    ctx.putImageData(imageData, 200, 0);
  };

  const adjustImageData = (
    data,
    redAdjustment,
    greenMultiplier,
    blueMultiplier
  ) => {
    for (var i = 0; i < data.length; i += 4) {
      data[i] = Math.min(data[i] + redAdjustment, 255);
      data[i + 1] *= greenMultiplier;
      data[i + 2] *= blueMultiplier;
    }
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "1000px",
          height: "800px",
        }}
      >
        <canvas
          id="canvas"
          width="1000"
          height="800"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 100,
          }}
        />
        <KonvaCanvas
          style={{
            position: "absolute",
            top: 200,
            left: 435,
            zIndex: 500,
          }}
        />
      </div>
    </>
  );
};

export default TwoDCanvas;
