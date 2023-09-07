import React, { useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";

const Capture = ({ shouldCapture, setShouldCapture }) => {
  const { gl } = useThree();

  useFrame(() => {
    if (shouldCapture) {
      const imgData = gl.domElement.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "capture.png";
      link.click();
      setShouldCapture(false);
    }
  });

  return null;
};

export default Capture;
