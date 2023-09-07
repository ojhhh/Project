import styled from "styled-components";

export const DecalsPopupWrap = styled.div`
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
  & .decalsPopupContainer {
    box-sizing: border-box;
    width: 900px;
    height: 800px;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    /* overflow-y: auto; */

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
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  & .popupTitle .title span {
    font-size: 24px;
  }
  & .popupBody {
    display: flex;
    flex-wrap: wrap;
  }
  & .popupCard {
    box-sizing: border-box;
    width: 215px;
    height: 215px;
    margin-bottom: 10px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px;
  }
  & .popupCard img {
    width: 100%;
    height: 100%;
    border: 1px solid gray;
    border-radius: 20px;
  }
  & .popupCard img:hover {
    box-sizing: border-box;
    border: 2px solid orange;
  }
`;

// 팝업창 닫기 버튼
export const DecalsClosebtn = styled.div`
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
