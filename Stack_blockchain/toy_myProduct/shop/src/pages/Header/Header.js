import React, { useState, useEffect, useContext } from "react";
import {
  HeaderWrap,
  HeaderLeftWrap,
  HeaderRightWrap,
  ExchangeWalletWrap,
  Group,
} from "./Header.styled";
import { Link } from "react-router-dom";
import Global from "../../Global";

const Header = () => {
  const { user, web3, sessionUser, setSessionUser, contract, setContract } =
    useContext(Global);

  useEffect(() => {
    const slice1 = user.account.slice(0, 5);
    const slice2 = user.account.slice(-5);
    const joinAccount = slice1 + "..." + slice2;
    setSessionUser(joinAccount);
  }, [web3]);

  const handleAccoutCopy = () => {
    navigator.clipboard.writeText(user.account);
  };

  return (
    <HeaderWrap>
      <HeaderLeftWrap>
        <Group>
          <Link to="/">
            <div className="logo">
              <img
                src={`${process.env.PUBLIC_URL}/images/okx_logo.png`}
                alt=""
              />
            </div>
          </Link>
          <ExchangeWalletWrap>
            <div className="exchangeWallet">
              <div className="exchangeWalletBorder">
                <div className="exchangebtn">
                  <span>Exchange</span>
                </div>

                <div className="walletebtn">
                  <span>Wallet</span>
                </div>
              </div>
            </div>
          </ExchangeWalletWrap>
          <div className="dashboard">
            <span>Dashboard</span>
          </div>
          <div className="trade">
            <span>Trade</span>
          </div>
          <div className="marketplace">
            <span>MarketPlace</span>
          </div>
          <div className="DeFi">
            <span>DeFI</span>
          </div>
          <div className="Bulid">
            <span>Bulid</span>
          </div>
        </Group>
      </HeaderLeftWrap>

      <HeaderRightWrap>
        <Group>
          {/* 메타마스크 연결되있으면 계정이 보이고 연결안되있으면 버튼으로 보임 */}
          {/* {!sessionUser ? (
            <div className="connectWallet" onClick={handleConnectwallet}>
              <span>Connect Wallet</span>
            </div>
          ) : (
            <div className="connectedWallet">
              <span>{sessionUser}</span>
            </div>
          )} */}
          <div className="connectedWallet" onClick={handleAccoutCopy}>
            <span>{sessionUser}</span>
          </div>
          <div className="downloadapp">
            <img
              src={`${process.env.PUBLIC_URL}/images/file-arrow-down-solid.svg`}
              alt=""
            />
          </div>
          <div className="alarm">
            <img
              src={`${process.env.PUBLIC_URL}/images/bell-regular.svg`}
              alt=""
            />
          </div>
          <div className="support">
            <img
              src={`${process.env.PUBLIC_URL}/images/headset-solid.svg`}
              alt=""
            />
          </div>
          <div className="language">
            <img
              src={`${process.env.PUBLIC_URL}/images/globe-solid.svg`}
              alt=""
            />
          </div>
        </Group>
      </HeaderRightWrap>
    </HeaderWrap>
  );
};

export default Header;
