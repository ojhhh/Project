import React, { useState, useEffect, useContext } from "react";
import {
  SalePopupWrap,
  PopupMain,
  PopupTitle,
  NFTWrap,
} from "./SalePopup.styled";
import axios from "axios";
import Global from "../../Global";

const resp_url = process.env.REACT_APP_RESP_URL;
const pinata_api_key = process.env.REACT_APP_PINATA_API_KEY;
const pinata_secret_api_key = process.env.REACT_APP_PINATA_SECRET_API_KEY;
const json_url = process.env.REACT_APP_JSON_URL;
const images_url = process.env.REACT_APP_IPFS_ADDRESS;

const SalePopup = ({ handleSalePop }) => {
  const [fileHash, setFileHash] = useState();
  const [jsonHash, setJsonHash] = useState();
  const [file, setFile] = useState();

  const [jsonFileName, setJsonFileName] = useState();
  const [nftName, setNftName] = useState();
  const [nftDescription, setNftDescription] = useState();
  const [nftPrice, setNftPrice] = useState();
  const [nftTokenId, setNftTokenId] = useState();

  const { user, contract } = useContext(Global);

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  const handleUpload = async () => {
    try {
      const fileData = new FormData();
      fileData.append("file", file);
      const resp = await axios.post(resp_url, fileData, {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key,
          pinata_secret_api_key,
        },
      });

      console.log("resp : ", resp);

      if (resp) {
        const { data } = resp;
        setFileHash(data.IpfsHash);
        await getTokenIdLength();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleJsonUpload = async () => {
    try {
      const data = {
        pinataContent: {
          name: nftName,
          description: nftDescription,
          owner: user.account,
          image: `${images_url}` + fileHash,
          price: nftPrice * 1000,
          tokenId: nftTokenId,
        },
        pinataMetadata: {
          name: jsonFileName,
        },
      };

      const result = await axios.post(json_url, data, {
        headers: {
          "Content-Type": "application/json",
          pinata_api_key,
          pinata_secret_api_key,
        },
      });

      if (result) {
        const { data } = result;
        setJsonHash(data.IpfsHash);
      }
    } catch (error) {
      console.error("result error :", error);
    }
  };

  const getTokenIdLength = async () => {
    const result = await contract.methods.getTokenIdLength().call();

    setNftTokenId(parseInt(result));
  };

  const handleMinting = async () => {
    try {
      await contract.methods.minting(jsonHash).send({ from: user.account });
      return alert("민팅성공");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SalePopupWrap>
      <PopupMain>
        <PopupTitle>
          <h2>NFT MITING</h2>
          <div onClick={handleSalePop} className="popupClose">
            <div className="xBtn" />
          </div>
        </PopupTitle>
        <NFTWrap>
          <div className="nftImage">
            <div className="imageWrap">
              <img src={image} alt="" />
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
              <button onClick={handleUpload}>file upload</button>
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
                  placeholder="0.001"
                />
              </div>
              <button onClick={handleJsonUpload}>JSON 파일만들기</button>

              <div className="nftTokenId">
                <span>Token ID</span>
                <input type="text" readOnly placeholder={nftTokenId} />
              </div>
              <div className="jsonHash">
                <span>JSON HASH</span>
                <input type="text" readOnly placeholder={jsonHash} />
              </div>
              <button onClick={handleMinting}>NFT 민팅</button>
            </div>
          </div>
        </NFTWrap>
      </PopupMain>
    </SalePopupWrap>
  );
};

export default SalePopup;
