import styled, { keyframes } from "styled-components";

const rotateInfinite = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const ProductPageWrap = styled.div``;

export const ProductPageTop = styled.div`
  width: 100vw;
  height: 80px;
  box-shadow: 0 4px 5px -4px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  & .topWrap {
    width: 1440px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .topLeftWrap,
  .topRightWrap {
    display: flex;
  }
`;

export const ProductTopInputWrap = styled.div`
  display: flex;
  & .searchInput {
    width: 500px;
    height: 50px;
    border-radius: 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.1);
  }

  & .searchInput img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
  & .searchInput input {
    width: 90%;
    height: 30px;
    border: none;
    font-size: 14px;
    padding: 5px;
    background-color: transparent;
  }
  & .searchInput input::placeholder {
    font-size: 14px;
  }
  & .searchInput input:focus {
    outline: none;
  }
`;

export const ProductTopMenuWrap = styled.div`
  display: flex;

  & .cryptoBtn,
  .ordinalsBtn,
  .nftMarketBtn,
  .rankingsBtn,
  .launchpadBtn {
    width: 100px;
    height: 70px;
    display: grid;
    place-items: center;
  }
  & .cryptoBtn span,
  .ordinalsBtn span,
  .nftMarketBtn span,
  .rankingsBtn span,
  .launchpadBtn span {
    color: #888888;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
  }

  & .saleBtn,
  .profileBtn {
    width: 40px;
    height: 70px;
    display: grid;
    place-items: center;
  }

  & .saleBtn {
    margin-left: 20px;
  }
  & .saleBtn img,
  .profileBtn img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const ProductPageBodyWrap = styled.div`
  margin: 10px auto 0;
  width: 1440px;
  height: auto;
  /* border: 1px solid; */
  display: flex;
`;

export const ProductPageSideWrap = styled.div`
  width: 20%;
  & .networkTap,
  .verifiedTap,
  .statusTap,
  .priceTap,
  .orderSourceTap,
  .colletionsTap,
  .categoriesTap {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .networkTap img:first-child {
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }

  & .networkTap span,
  .verifiedTap span,
  .statusTap span,
  .priceTap span,
  .orderSourceTap span,
  .colletionsTap span,
  .categoriesTap span {
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  & .networkTapBox {
    display: flex;
    align-items: center;
  }
`;
export const ProductPageMainWrap = styled.div`
  width: 80%;
  padding-left: 10px;
`;

export const ProductPageMainBtns = styled.div`
  width: 100%;
  height: 50px;
  /* border: 1px solid; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .filterBtn,
  .refreshBtn,
  .sortBtn,
  .layoutBtn {
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    margin: 0 2px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  & .filterBtn {
    width: 80px;
    display: flex;
    justify-content: space-evenly;
  }

  & .filterBtn img {
    width: 18px;
    height: 18px;
  }

  & .filterBtn span {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
  }

  & .refreshBtn {
    width: 40px;
    display: grid;
    place-items: center;
  }

  & .refreshBtn img {
    width: 22px;
    height: 22px;
  }

  & .refreshBtn img:hover {
    animation: ${rotateInfinite} 1s linear infinite;
  }

  & .sortBtn {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  & .sortBtn span {
    margin-right: 5px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
  }

  & .layoutBtn {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .tableBtn {
    margin: 0 2px;
    display: grid;
    place-items: center;
    padding: 3px;
    border-radius: 5px;
    cursor: pointer;
  }

  & .tableBtn:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  & .tableBtn img {
    width: 20px;
    height: 20px;
  }
`;

export const ProductPageMain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 5px;
`;

export const ProductCard = styled.div`
  width: 220px;
  height: 280px;
  margin: 10px 5px 10px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  &:nth-child(5n) {
    margin-right: 0;
  }
  & .cardImg {
    width: 100%;
    height: 220px;
    overflow: hidden;
  }
  & .cardImg img {
    width: 100%;
    transition: transform 0.3s;
  }

  &:hover .cardImg img {
    transform: scale(1.1);
  }

  & .cardText {
    padding: 0 10px;
  }
  & .nftTitle {
  }
  & .nftTitle span {
    font-weight: 800;
  }
  & .nftOwner {
    margin-bottom: 5px;
  }
  & .nftOwner span {
    font-weight: 300;
    font-size: 10px;
  }
  & .nftPrice {
  }

  & .nftPrice img {
    width: 15px;
    height: 15px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const UnderArrowImage = styled.img.attrs((props) => ({
  src: `${process.env.PUBLIC_URL}/images/chevron-down-solid.svg`,
  alt: "",
}))`
  width: 12px;
  height: 12px;
  margin-right: 5px;
  cursor: pointer;
`;

export const ToggleBtnImage = styled.img.attrs((props) => ({
  src: `${process.env.PUBLIC_URL}/images/toggle-on-solid.svg`,
  alt: "",
}))`
  width: 50px;
  height: 40px;
  margin-right: 5px;
  object-fit: fill;
  cursor: pointer;
`;
