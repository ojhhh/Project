import React, { useState, useEffect } from "react";

const resp_url = process.env.REACT_APP_RESP_URL;
const pinata_api_key = process.env.REACT_APP_PINATA_API_KEY;
const pinata_secret_api_key = process.env.REACT_APP_PINATA_SECRET_API_KEY;
const json_url = process.env.REACT_APP_JSON_URL;

const minting = () => {
  const upload = async () => {
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
        setFilehash(data.IpfsHash);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return <div>minting</div>;
};

export default minting;
