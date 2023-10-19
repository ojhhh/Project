import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const MyPageWrap = styled.div``;

export const MyPageProfile = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid;
  background-image: url(${process.env
    .PUBLIC_URL}/images/okx_top_backgroundimage.webp);
  background-size: cover;
  & .profileWrap {
    width: 1440px;
    height: 300px;
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
  height: 80px;
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
  border: 1px solid;
`;
