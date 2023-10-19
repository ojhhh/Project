import React, { useState, useEffect } from "react";
import {
  SalePopupWrap,
  PopupMain,
  PopupTitle,
  NFTWrap,
} from "./SalePopup.styled";

const SalePopup = ({ salePopHandler }) => {
  const [fileHash, setFileHash] = useState();
  const [jsonHash, setJsonHash] = useState();

  const [jsonFileName, setJsonFileName] = useState();
  const [nftName, setNftName] = useState();
  const [nftDescription, setNftDescription] = useState();
  const [nftPrice, setNftPrice] = useState();
  const [nftTokenId, setNftTokenId] = useState();

  const [image, setImage] = useState(null);

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <SalePopupWrap>
      <PopupMain>
        <PopupTitle>
          <h2>NFT MITING</h2>
          <div onClick={salePopHandler} className="popupClose">
            <div className="xBtn" />
          </div>
        </PopupTitle>
        <NFTWrap>
          <div className="nftImage">
            <div className="imageWrap">
              <img src={image} alt="" />
              <input type="file" onChange={handleImagePreview} />
              <button>file upload</button>
            </div>
          </div>
          <div className="nftContent">
            <div className="contentWrap">
              <div className="jsonFileName">
                <span>JSON 파일 이름</span>
                <input
                  type="text"
                  onChange={(e) => setJsonFileName(e.target.value)}
                  placeholder="test.json"
                />
              </div>
              <div className="nftName">
                <span>NFT NAME</span>
                <input
                  type="text"
                  onChange={(e) => setNftName(e.target.value)}
                  placeholder="test"
                />
              </div>
              <div className="nftDescription">
                <span>NFT DESCRIPTION</span>
                <input
                  type="text"
                  onChange={(e) => setNftDescription(e.target.value)}
                  placeholder="test file"
                />
              </div>
              <div className="nftUrl">
                <span>NFT URL</span>
                <input type="text" readOnly placeholder={fileHash} />
              </div>
              <div className="nftPrice">
                <span>Price</span>
                <input
                  type="text"
                  onChange={(e) => setNftPrice(e.target.value)}
                  placeholder="0"
                />
              </div>
              <button>JSON 파일만들기</button>

              <div className="nftTokenId">
                <span>Token ID</span>
                <input type="text" readOnly placeholder={nftTokenId} />
              </div>
              <div className="jsonHash">
                <span>JSON HASH</span>
                <input type="text" readOnly placeholder={jsonHash} />
              </div>
              <button>NFT 민팅</button>
            </div>
          </div>
        </NFTWrap>
      </PopupMain>
    </SalePopupWrap>
  );
};

export default SalePopup;
