import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MyPage from "./pages/MyPage/MyPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import Global from "./Global";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/ShopNFT.json";
import axios from "axios";

const ipfsAddress = process.env.REACT_APP_IPFS_ADDRESS;

function App() {
  const { user, web3 } = useWeb3();

  const [sessionUser, setSessionUser] = useState(null);

  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState("0");
  const [nftlist, setNftlist] = useState([]);

  useEffect(() => {
    if (web3) {
      if (contract) return;

      const shopNFT = new web3.eth.Contract(
        abi,
        "0x993173C6bfCfB7B0590dE37d5F491BA04447CA95",
        { data: "" }
      );
      setContract(shopNFT);
      // 단위 eth로 변경
      (async () => {
        const changeETH = await web3.eth.getBalance(user.account);
        const _changeETH = await web3.utils.fromWei(changeETH, "ether");

        setBalance(_changeETH);
      })();
    }
  }, [web3]);

  useEffect(() => {
    try {
      getAllOwner();
    } catch (error) {
      console.error(error);
    }
  }, [contract]);

  const getAllOwner = async () => {
    try {
      if (!contract) return;
      const result = await contract.methods.getAllOwner().call();
      const nfts = [];
      for (let i = 0; i < result.length; i++) {
        const url = `${ipfsAddress}${result[i]}`;

        const { data } = await axios.get(url);
        nfts.push(data);
      }
      setNftlist(nfts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {}, [nftlist]);

  const obj = {
    user,
    web3,
    sessionUser,
    setSessionUser,
    contract,
    setContract,
    balance,
    setBalance,
    nftlist,
    setNftlist,
  };

  return (
    <>
      <Global.Provider value={obj}>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Global.Provider>
    </>
  );
}

export default App;
