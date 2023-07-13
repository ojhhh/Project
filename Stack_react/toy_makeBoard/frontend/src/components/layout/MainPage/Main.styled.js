import styled from "styled-components";

export const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  & .container {
    margin: 0 auto;
    width: 600px;
    height: 800px;
  }
  & .loginWrap {
    width: 100%;
    height: 300px;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
  }
  & .loginContainer {
    margin-bottom: 20px;
  }
  & label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
  }
  & input {
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  & button {
    margin-bottom: 10px;
    height: 40px;
    background-color: black;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
    transition: 0.5s;
    border: none;
  }
  & button:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  & .sign {
    width: 100%;
    height: 40px;
    background-color: black;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    transition: 0.5s;
  }
  & .sign:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
