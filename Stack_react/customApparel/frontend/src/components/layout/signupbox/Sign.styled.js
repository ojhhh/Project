import styled from "styled-components";

export const SignboxWrapper = styled.div`
  /* background: #39393c; */
  width: 100%;
  height: 1000px;
  & .logo {
    width: 100px;
    height: 50px;
    margin: 0 auto;
    display: block;
  }
`;

export const Container = styled.div`
  height: 100%;
  font-size: 0;
`;
export const Inner = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

export const Content = styled.div`
  flex: 1 1 auto;
  padding-top: 30px;
  & .signupbutton {
    flex: none;
    padding: 20px;
  }
  & .btn_submit {
    width: 100%;
    padding: 14px 0;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: black;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: #fff;
    cursor: pointer;
  }
`;
export const Join_form = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
`;
export const Form_content = styled.div`
  flex: 1 1 auto;
`;
export const Form_section = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  padding-right: 0;
  padding-left: 0;
  padding: 0 20px;
`;

export const Form_list = styled.div`
  position: relative;
  margin-bottom: 10px;
  border-radius: 6px;
`;

export const Formitem = styled.div`
  /* border: 1px solid black; */
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  min-height: 50px;
  padding: 0 10px 0 45px;
  input {
    flex: 1 1 auto;
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    line-height: 22px;
    color: #222;
    /* background-color: #39393c; */
  }
  &:hover {
    border: 1px solid red;
  }
  & .uesr {
    background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_dark_d5da14a9.png);
    background-size: 159px 146px;
    background-position: -32px -52px;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    filter: invert(100%);
  }
  & .uesrid {
    background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_dark_d5da14a9.png);
    background-size: 159px 146px;
    background-position: -32px -52px;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    filter: invert(100%);
  }
  & .userpw {
    background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_dark_d5da14a9.png);
    background-size: 159px 146px;
    background-position: -32px -84px;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    filter: invert(100%);
  }
  & .profileimg {
    background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_dark_d5da14a9.png);
    background-size: 159px 146px;
    background-position: -129px 0;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    filter: invert(100%);
  }
`;

// Form_item;
