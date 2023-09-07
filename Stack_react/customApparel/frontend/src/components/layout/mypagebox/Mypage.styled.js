import styled from "styled-components";

export const MypageMainWrap = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  & h1 {
    margin-left: 30px;
  }
`;

export const Mainwrapper = styled.div`
  button {
    padding-left: 11px;
    padding-right: 11px;
    border-color: #bcbfc6;
    color: #777;
    background-color: #fafbf6;
    background-image: linear-gradient(#fff, #f1f1f1);
  }
  & .flexbox {
    display: flex;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
  }

  & .leftbluebox {
    width: 100px;
    /* background-color: #eef1f8; */
    text-align: left;
    white-space: nowrap;
    padding: 14px 30px;
    /* border-bottom: 1px solid #ddd; */
  }
  & .leftbluebigbox {
    width: 100px;
    /* background-color: #eef1f8; */
    white-space: nowrap;
    padding: 14px 30px;
    /* border-bottom: 1px solid #ddd; */
    text-align: center;
    padding-top: 133px;
  }
  & .rightbox {
    padding: 14px 30px;
    /* border-bottom: 1px solid #ddd; */
  }
  & .maintitle {
    height: 100%;
    padding-bottom: 6px;
    padding-top: 15px;
    font-weight: 700;
    border-bottom: 2px solid #222;
    color: #222;
    cursor: pointer;
    position: relative;
    text-decoration: none;
  }
`;
