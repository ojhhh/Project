import { styled } from "styled-components";

export const SalePopupWrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  display: grid;
  place-items: center;
`;

export const PopupMain = styled.div`
  width: 800px;
  height: 600px;
  border: 1px solid;
  border-radius: 20px;
  background-color: white;
  position: relative;
  & .popupTitle {
    width: 100%;
    height: 60px;
    display: grid;
    place-items: center;
    box-shadow: 0 4px 5px -4px rgba(0, 0, 0, 0.5);
  }
  & .popupClose {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
    top: 0;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  & .xBtn {
    position: relative;
    width: 20px;
    height: 20px;
  }

  & .xBtn::before,
  .xBtn::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
    transform-origin: center;
  }

  & .xBtn::before {
    transform: rotate(45deg);
  }

  & .xBtn::after {
    transform: rotate(-45deg);
  }
`;
