import styled from "styled-components";
export const MainWrap = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  & .mainText {
    padding-top: 70px;
    padding-left: 30px;
    width: 60%;
    background : #f0f0f0;
    height: auto;
  }
  & .mainText .text {
    font-size: 110px;
    font-family: 'BlackHanSans' ;
    margin-top: 30px;
    margin-left: 70px;
  }
  
  & .mainText .text span {
    font-size: inherit;
    font-family: inherit;
  }
  & .mainContainer {
    background : #f0f0f0;
    width: 40%;
    height: auto;
  }
  & .mainContainer img {
    width: 100%;
    height: 100%;
  }

  & .text span.active {
    animation: smoke 1s linear forwards;
    transform-origin: bottom;
  }

  @keyframes smoke {
    0% {
        pointer-events: none;
        opacity: 1;
        z-index: -1;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        visibility: hidden;
        filter: blur(20px);
        transform: translateX(100px) translateY(-300px) rotate(720deg) scale(6);
    }
}
`;
