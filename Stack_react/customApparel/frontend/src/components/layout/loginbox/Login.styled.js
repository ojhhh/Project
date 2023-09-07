import styled from "styled-components";

export const Body = styled.div`
  height: 100%;
  color: #222;
  background-color: #fff;
  margin: 0;
  padding: 0;
`;
export const Wrap = styled.div`
  position: relative;
  height: 100%;
  letter-spacing: -0.5px;
`;
export const Header = styled.div`
  padding-bottom: 48px;
  box-sizing: border-box;
  & .headerinner {
    position: relative;
    width: 743px;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
  }
`;
export const Container = styled.div`
  & .content {
  }
  & .loginwrap {
    box-sizing: border-box;
    width: 460px;
    margin: 0 auto;
  }
  & .menuwrap {
    display: table;
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
  }
  & .menuitem {
    position: relative;
    display: table-cell;
    vertical-align: top;
    margin: 0;
    padding: 0;
  }
  & .menuidon {
    border-right: 0;
    border-radius: 6px 0 0 0;
    display: block;
    position: relative;
    height: 61px;
    border: 1px solid #e3e3e3;
    padding-top: 17px;
    text-align: center;
    box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
  }
  /* & .menutext {
    position: relative;
    padding-left: 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.5px;
    color: #777;
    vertical-align: middle;
    color: #333;
  } */
  & .panelwrap {
    position: relative;
    z-index: 3;
    margin-top: -8px;
  }
  & .panelitem {
    border: 1px solid #c6c6c6;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 5px 8px 0 rgba(68, 68, 68, 0.04);
  }
  & .panelinner {
    padding: 20px 28px;
  }
  & .idpwwrap {
    border-radius: 6px 6px 0 0;
    box-shadow: none;
    display: table;
    table-layout: fixed;
    width: 100%;
    padding: 14px 17px 13px;
    box-sizing: border-box;
  }
  & .inputrow {
    position: relative;
    display: block;
    height: 100%;
    border: 1px solid #dadada;
    padding: 16px 18px 15px;
    border-radius: 6px;
    box-sizing: border-box;
    text-align: left;
    box-shadow: 0 2px 6px 0 rgba(68, 68, 68, 0.08);
  }
  & .iconcell {
    display: table-cell;
    width: 24px;
    vertical-align: middle;
  }
  & .iconid {
    position: absolute;
    top: 50%;
    left: 17px;
    margin-top: -8px;
    background-position: -93px -203px;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png);
    background-size: 266px 225px;
    background-repeat: no-repeat;
  }
  input {
    border-radius: 0;
    border: none;
    background: 0 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    text-decoration: none;
    cursor: pointer;
    -webkit-text-size-adjust: none;
  }
  & .inputtext {
    padding-left: 39px;

    border-radius: 0;
    border: none;
    background: 0 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    text-decoration: none;
    cursor: pointer;
    -webkit-text-size-adjust: none;
  }
  & .iconpw {
    position: absolute;
    top: 50%;
    left: 17px;
    margin-top: -8px;
    background-position: -129px -203px;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png);
    background-size: 266px 225px;
    background-repeat: no-repeat;
  }
  & .blind {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
  & .btnloginwrap {
    margin-top: 38px;
  }
  & .btnlogin {
    display: block;
    width: 100%;
    padding: 13px 0 13px;
    border-radius: 6px;
    border: solid 1px rgba(0, 0, 0, 0.15);
    background-color: black;
    box-sizing: border-box;
  }
  & .btntext {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: #fff;
  }
  & .findwrap {
    padding: 20px 0 35px;
    text-align: center;
  }
  & .findtext {
  }
  & .text {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.5px;
    color: #777;
  }
  /* & .before {
    background-position: -142px -172px;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png);
    background-size: 266px 225px;
    background-repeat: no-repeat;
  } */
  & .after {
    content: "";
    position: absolute;
    top: -1px;
    right: -8px;
    background-position: 0 -139px;
    background-repeat: no-repeat;
    width: 15px;
    height: 62px;
    background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png);
    background-size: 266px 225px;
    background-repeat: no-repeat;
  }
`;

export const Menutext = styled.span`
  position: relative;
  /* padding-left: 24px; */
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #777;
  vertical-align: middle;
  color: #333;

  & .before {
    padding-left: 18px;

    background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png);
    background-size: 266px 225px;
    background-position: -142px -172px;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
  }
`;
export const Footer = styled.div``;
