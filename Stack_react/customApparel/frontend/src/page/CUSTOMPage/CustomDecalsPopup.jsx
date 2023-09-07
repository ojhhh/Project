import React from "react";
import { DecalsPopupWrap, DecalsClosebtn } from "./CustomDecalsPopup.styled";
import { useDispatch } from "react-redux";
import { decalName, decalNum } from "../../features/decalslice";

const PROXY = process.env.REACT_APP_PROXY;

const CustomDecalsPopup = ({ handlerDecal }) => {
  const dispatch = useDispatch();

  const ta = (e) => {
    const decal = e.target.src.split("/")[3];
    let temp = null;
    dispatch(decalName(decal));
    dispatch(decalNum("plus"));
    handlerDecal();
    // console.log("handlerDecal작동함");
  };

  return (
    <DecalsPopupWrap>
      <div className="decalsPopupContainer">
        <div className="popupClose">
          <DecalsClosebtn onClick={handlerDecal} />
        </div>
        {/* DecalsPopup Title */}
        <div className="popupTitle">
          <div className="title">
            <span>Decals</span>
          </div>
        </div>
        {/* DecalsPopup Body */}
        <div className="popupBody">
          {/* push the image and map here */}
          <div className="popupCard" onClick={ta}>
            <img src="instagram.png" />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src="jordan_thumb.png" />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src="airjordan.png" />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src="adidas.png" />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src="twinbear.png" />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src="burberry.png" />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src="happycat.png" />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src="mickeymouse.png" />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src="mudo.png" />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src="squid.png" />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src="sunglass.png" />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src="bluelight.png" />
          </div>
        </div>
      </div>
    </DecalsPopupWrap>
  );
};

export default CustomDecalsPopup;
