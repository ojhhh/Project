import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeftWrap = styled.div`
  & .logo {
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .logo img {
    width: 120px;
    cursor: pointer;
  }

  & .dashboard,
  .trade,
  .marketplace,
  .DeFi,
  .Bulid {
    width: 100px;
    height: 40px;
    display: grid;
    place-items: center;
  }
  & .dashboard span,
  .trade span,
  .marketplace span,
  .DeFi span,
  .Bulid span {
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const ExchangeWalletWrap = styled.div`
  & .exchangeWallet {
    width: 150px;
    height: 40px;
    display: grid;
    place-items: center;
    color: white;
    box-sizing: border-box;
    cursor: pointer;
  }
  & .exchangeWalletBorder {
    border: 1px solid #5c5b5b;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #444444;
  }

  & .exchangeWallet .exchangebtn,
  .exchangeWallet .walletebtn {
    width: 80px;
    height: 30px;
    display: grid;
    place-items: center;
  }
  & .exchangeWallet .exchangebtn {
  }
  & .exchangeWallet .walletebtn {
    background-color: white;
    color: black;
    width: 60px;
    border-radius: 5px;
  }
`;

export const HeaderRightWrap = styled.div`
  display: flex;
  align-items: center;

  & .connectWallet {
    width: 120px;
    height: 30px;
    display: grid;
    place-items: center;
    background-color: white;
    border-radius: 20px;
    margin-right: 20px;
    cursor: pointer;
  }

  & .connectWallet span {
    font-weight: 600;
  }

  & .connectedWallet {
    width: 120px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
  & .connectedWallet span {
    color: white;
    font-weight: 600;
  }

  & .downloadapp,
  .alarm,
  .support,
  .language {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  & .downloadapp img,
  .alarm img,
  .support img,
  .language img {
    width: 20px;
    height: 20px;
  }

  & .language {
    margin-right: 50px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;
