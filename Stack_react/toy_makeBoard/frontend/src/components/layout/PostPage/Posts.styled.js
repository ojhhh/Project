import styled from "styled-components";

export const PostWrap = styled.div`
  width: 100vw;
  height: 100vh;
  & .container {
    margin: 0 auto;
    border: 1px solid;
    width: 600px;
    height: 800px;
  }
`;

export const PostsMainWrap = styled.div`
  width: 100%;
  height: 720px;
  border: 1px solid;
  & .titleBox {
    display: flex;
    width: 600px;
    height: 50px;
    box-sizing: border-box;
  }
  & .titleBox:first-child .title,
  & .titleBox:first-child .content,
  & .titleBox:first-child .writer {
    font-size: 16px;
  }
  ,
  & .title,
  .content,
  .writer,
  .btnBox {
    height: 50px;
    border: 1px solid;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 5px;
    font-weight: 800;
  }
  & .title {
    width: 200px;
  }
  & .content {
    width: 200px;
  }
  & .writer {
    width: 150px;
  }
  & .btnBox {
    width: 50px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & .btnBox button {
    width: 100%;
    height: 50%;
    padding: 0;
  }
`;
