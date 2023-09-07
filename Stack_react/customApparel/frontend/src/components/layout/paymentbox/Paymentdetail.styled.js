import styled from "styled-components";

export const Paymentdetailwrapper = styled.div`
  & .main {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 100%;
  }
  & .mainitembox {
    width: 800px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px,
      rgba(0, 0, 0, 0.16) 0px 0px 1px 0px;
    background-color: rgb(255, 255, 255);
    margin-bottom: 20px;
    padding: 24px 24px 16px;
  }
  & .paydateanddetailbox {
    height: 28px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  & .paydate {
    display: inline-block;
    width: 50%;
    height: 28px;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: -0.5px;
    color: rgb(17, 17, 17);
  }
  & .paydetailbutton {
    text-align: right;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.5px;
    color: rgb(52, 106, 255);
    display: inline-flex;
    vertical-align: middle;
    position: relative;
    width: auto;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
  & .paydetailspan {
    height: 16px;
    line-height: 1;
    margin: auto;
  }

  & .summarybox {
    border-radius: 8px;
    border: 1px solid rgb(238, 238, 238);
    background-color: rgb(255, 255, 255);
    margin-top: 16px;
  }
  & .summaryinnertable {
  }
  & .summaryinnertabletd {
    height: 100%;
    padding: 20px;
    vertical-align: top;
  }
  & .summaryinnerbox1 {
  }
  & .summaryinnerdownbox {
    margin: 0;
    padding: 0;
    font-size: 100%;
  }
  & .summaryinnerdownbox1 {
    margin-top: 20px;
  }
  & .shieldbox {
    user-select: none;
    overflow: hidden;
    flex: 1 1 0%;
    display: flex;
  }
  & .swordbox {
    display: flex;
    flex: 1 1 0%;
    user-select: none;
    min-width: 0px;
    flex-direction: column;
  }
  & .shieldinnerbox {
    margin-bottom: 4px;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    line-height: 1.5;
  }
  & .shieldinnerbox1 {
  }
  & .shieldinnerbox2 {
  }
  & .shieldinnerbox2button {
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    appearance: none;
    height: 2.25rem;
    border-radius: 4px;
    color: rgb(17, 17, 17);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(221, 221, 221);
    -webkit-tap-highlight-color: rgba(52, 106, 255, 0.1);
    font-size: 0.875rem;
  }
  & .threebutton {
    display: flex;
    flex-flow: column wrap;
    height: 100%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 20px;
    width: 200px;
    height: 100%;
    text-align: center;
    border-left: 1px solid rgb(238, 238, 238);
  }
  & .threebuttonbutton {
    min-height: 2.25rem;
    font-size: 0.875rem;
    width: 160px;
    margin: 5px 0px;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    appearance: none;
    height: 2.25rem;
    width: 100%;
    border-radius: 4px;
    color: rgb(52, 106, 255);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(52, 106, 255);
    -webkit-tap-highlight-color: rgba(52, 106, 255, 0.1);
    font-size: 0.875rem;
  }
  & .threebuttonbutton1 {
    min-height: 2.25rem;
    font-size: 0.875rem;
    width: 160px;
    margin: 4px 0px;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    appearance: none;
    height: 2.25rem;
    width: 100%;
    border-radius: 4px;
    color: rgb(17, 17, 17);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(221, 221, 221);
    -webkit-tap-highlight-color: rgba(52, 106, 255, 0.1);
    font-size: 0.875rem;
  }
`;
