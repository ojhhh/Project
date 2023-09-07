import React from "react";
import { ImageContainer, ImagePreview } from "./styled";
// import img from "./1.jpeg";
const PROXY = process.env.REACT_APP_PROXY;

const ImageBox = ({ img }) => {
  let lengthChk = img.length;

  return (
    <ImageContainer>
      <ImagePreview>
        {lengthChk > 10000 ? (
          <img src={img} alt="Uploaded Image" />
        ) : (
          <img src={`${PROXY}` + img} alt="Uploaded Image" />
        )}
      </ImagePreview>
    </ImageContainer>
  );
};

export default ImageBox;
