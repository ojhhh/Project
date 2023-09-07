import styled from "styled-components";

export const CustomWrap = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  z-index: -1;
  padding: 20px;
  & .customMainWrap {
    box-sizing: border-box;
    width: 1000px;
    height: 900px;
    padding: 100px 0 0;
    margin-left: 85px;
  }

  & .customMainWrap .customMain {
    width: 1200px;
    height: 100%;
  }
`;

export const CustomSideWrap = styled.div`
  box-sizing: border-box;
  width: 480px;
  height: 100%;
  padding: 170px 15px 0;
  & .customSide {
    border: 1px solid #ff6b00;
    border-radius: 30px;
    padding: 20px 20px 20px 40px;
  }
  & .sideTitle {
    margin: 20px 0;
  }
  & .sideTitle > span {
    display: block;
    font-size: 18px;
    margin-bottom: 8px;
  }
  & .sideTitle > span:nth-child(2) {
    color: #ff6b00;
    margin-bottom: 20px;
  }
  & .btnWrap {
    display: flex;
  }
  & .productWrap,
  .imageWrap {
    width: 80px;
    height: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  & .productWrap:hover .changeProductBtn,
  .imageWrap:hover .git addImageBtn {
    color: white;
    background-color: black;
  }
  & .productWrap:hover img,
  .imageWrap:hover img {
    filter: invert(100%);
  }

  & .changeProductBtn,
  .addImageBtn {
    width: 60px;
    height: 60px;
    font-size: 14px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 400;
    transition: 1s;
  }

  & .changeProductBtn img,
  .addImageBtn img {
    width: 50px;
    height: 50px;
    transition: 1s;
  }

  & .productWrap span,
  .imageWrap span {
    margin-top: 4px;
    font-size: 14px;
    color: black;
  }

  & .sideColor {
    font-size: 14px;
    margin-bottom: 30px;
  }
  & .sideColor ul {
    display: flex;
    padding-inline-start: 0;
  }
  & .sideColor ul li {
    list-style-type: none;
  }
  /* 사이즈 */
  & .sideSize {
    font-size: 14px;
    margin-bottom: 30px;
  }
  & .sideSize ul {
    display: flex;
    padding-inline-start: 0;
  }

  & .delivery {
    font-size: 14px;
    margin-bottom: 30px;
  }
  & .delivery span {
    display: block;
    margin-bottom: 10px;
  }
  /* 장바구니 담기 */
  & .sideCart {
    font-size: 14px;
    margin-bottom: 30px;
  }
  & .sideCart .cartBtn {
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    transition: 1s;
  }
  & .sideCart .cartBtn:hover {
    background-color: white;
    color: black;
    border: 1px solid;
  }
`;

// 색상 탭 색 추가 부분
export const ColorPallet = styled.li`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  list-style-type: none;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${(props) => props.bgcolor};
  border: ${(props) => (props.color == props.bgcolor ? "2px solid" : "none")};
  &:hover {
    border: 2px solid;
  }
`;

export const SideSizeLi = styled.li`
  width: 60px;
  height: 50px;
  border: 1px solid;
  border-radius: 10px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  transition: 1s;
  color: ${(props) => (props.sizes == props.selectsize ? "white" : null)};
  background-color: ${(props) =>
    props.sizes == props.selectsize ? "black" : null};
  border: ${(props) =>
    props.sizes == props.selectsize ? "1px solid white" : null};
  &:hover {
    color: white;
    background-color: black;
    border: 1px solid white;
  }
  &:after {
    content: "${(props) => props.sizes}";
  }
`;

