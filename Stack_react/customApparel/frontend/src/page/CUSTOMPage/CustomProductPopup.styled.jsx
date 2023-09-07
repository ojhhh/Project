import styled from "styled-components";

export const PopupWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & .popupContainer {
    box-sizing: border-box;
    height: 800px;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
  }
  & .popupClose {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  & .popupTitle {
    margin-bottom: 20px;
  }
  & .popupTitle .title {
    font-size: 18px;
  }
  & .popupBody {
    display: flex;
  }
  & .popupCard {
    width: 280px;
    height: 450px;
    margin: 0 10px;
    box-sizing: border-box;
    cursor: pointer;
  }
  & .popupCard .cardImg {
    box-sizing: border-box;
    height: 380px;
    width: 100%;
    border: 1px solid;
    border-radius: 20px;
  }
  & .popupCard .cardImg:hover {
    border: 2px solid orange;
  }

  & .popupCard .cardText {
    padding: 10px;
  }
  & .popupCard .cardText span {
    margin-top: 5px;
    display: block;
    font-size: 14px;
  }
`;

// 팝업창 닫기 버튼
export const Closebtn = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 2px;
    background-color: #000;
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
