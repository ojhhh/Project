import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% { font-size: 1.1em; }
  50% { font-size: 1.3em; }
  100% { font-size: 1.1em; }
  `;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const MyPageWrap = styled.div``;

export const MyPageProfile = styled.div`
  width: 100%;
  height: 220px;
  border: 1px solid;
  background-image: url(${process.env
    .PUBLIC_URL}/images/okx_top_backgroundimage.webp);
  background-size: cover;
  & .profileWrap {
    width: 1440px;
    height: 220px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  & .profileInfo {
    height: 200px;
    display: flex;
    align-items: center;
  }

  & .profileImg {
    width: 120px;
    height: 120px;
    display: grid;
    place-items: center;
    margin-right: 20px;
  }

  /* & .profileImg img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(255, 120, 0, 1);
  } */

  & .tmpImg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(255, 120, 0, 1);
  }

  & .userAccount,
  .userBalance {
    width: 500px;
    display: flex;
    align-items: center;
  }
  & .userAccount {
    height: 40px;
  }
  & .userBalance {
    height: 80px;
  }
  & .userAccount span {
    color: white;
    font-size: 24px;
    font-weight: 400;
  }

  & .copyBtn {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    background-image: url(${process.env.PUBLIC_URL}/images/clone-regular.svg);
    cursor: pointer;
  }
  & .userBalance span {
    color: white;
    font-size: 40px;
    font-weight: 700;
  }
`;

export const Taplayer = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  & .tablayerWrap {
    width: 1440px;
    margin: 0 auto;
  }
  & .summaryTap,
  .cryptoTap,
  .nftsTap,
  .DeFiTap,
  .approvalsTap,
  .historyTap {
    padding: 4px 8px;
    height: 30px;
    display: grid;
    place-items: center;
    cursor: pointer;
    margin-right: 20px;
  }
  & .summaryTap:hover,
  .cryptoTap:hover,
  .DeFiTap:hover,
  .approvalsTap:hover,
  .historyTap:hover {
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  & .nftsTap {
    padding: 4px 8px;
    height: 30px;
    display: grid;
    place-items: center;
    cursor: pointer;
    margin-right: 20px;
    border-radius: 20px;

    background-color: rgba(0, 0, 0, 11);
  }
  & .nftsTap span {
    color: white;
    font-weight: 600;
  }

  & .summaryTap span,
  .cryptoTap span,
  .nftsTap span,
  .DeFiTap span,
  .approvalsTap span,
  .historyTap span {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const MyPageBody = styled.div`
  width: 100%;
`;

export const BodyTabs = styled.div`
  width: 1440px;
  height: 60px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .callectedTab,
  .MyNftTab,
  .activityTab,
  .nftordersTab {
    height: 60px;
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  & .callectedTab span,
  .MyNftTab span,
  .activityTab span,
  .nftordersTab span {
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
  & .callectedTab {
    border-bottom: ${(props) =>
      props.tabs === "Callected" ? "2px solid" : "none"};
  }
  & .callectedTab span {
    color: ${(props) =>
      props.tabs === "Callected" ? null : "rgba(0, 0, 0, 0.4)"};
  }
  & .MyNftTab {
    border-bottom: ${(props) =>
      props.tabs === "MyNFTs" ? "2px solid" : "none"};
  }
  & .MyNftTab span {
    color: ${(props) =>
      props.tabs === "MyNFTs" ? null : "rgba(0, 0, 0, 0.4)"};
  }
  & .activityTab span,
  .nftordersTab span {
    color: rgba(0, 0, 0, 0.4);
  }
  & .callectedTab span {
  }

  & .MyNftTab span:hover,
  .activityTab span:hover,
  .nftordersTab span:hover {
    color: rgba(0, 0, 0, 1);
  }

  & .saleBtn {
    width: 120px;
    height: 40px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    display: grid;
    place-items: center;
    cursor: pointer;
    animation: ${pulseAnimation} 2s infinite;
    margin-left: 10px;
  }
  & .saleBtn:hover {
    border: 1px solid;
    box-sizing: border-box;
  }
  & .saleBtn span {
    font-weight: 600;
  }
`;

export const BodyFilter = styled.div`
  width: 1440px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .filterBtn {
    height: 35px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
  & .filterBtn img {
    width: 15px;
    height: 15px;
    margin: 0 10px;
  }
  & .filterBtn span {
    font-size: 14px;
    margin-right: 10px;
  }
  & .filterInput {
    width: 300px;
    height: 35px;
    margin-right: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
  & .filterInput img {
    width: 15px;
    height: 15px;
    margin: 0 10px;
  }
  & .filterInput input {
    outline: none;
    border: none;
    background: transparent;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
  }

  & .sortTab {
    width: 150px;
    height: 35px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  & .sortTab:hover {
    border: 1px solid;
  }
  & .sortTab span {
    margin-right: 10px;
  }
  & .sortTab img {
    width: 10px;
    height: 10px;
  }
`;

export const MyPageCard = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
