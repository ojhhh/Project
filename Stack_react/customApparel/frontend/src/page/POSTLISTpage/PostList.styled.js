import styled from "styled-components";
import { Container as BSContainer } from "react-bootstrap";

export const Container = styled(BSContainer)`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding: 0 20px;
  & .my-masonry-grid {
    display: flex;
    margin-left: -30px; /* some gutter */
    width: auto;
  }

  & .my-masonry-grid_column {
    padding-left: 30px; /* some gutter */
    background-clip: padding-box;
  }

  & .my-masonry-grid_column > div {
    margin-bottom: 30px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;

// hashtag start
export const HashTagDiv = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  padding: 15px 0;
  display: flex;
  & .hashtagCard {
    width: 10%;
  }
  & .hashtagWrap {
    width: 80px;
    cursor: pointer;
  }
  & .hashtagImg {
    height: 80px;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  & .hashtagImg img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  & .hashtagBox {
    display: flex;
    justify-content: center;
  }
  & .hashtagTxt {
  }
  & .hashtagTxt span {
    font-size: 16px;
    color: #333333;
  }
`;

// Allpost start
export const AllPostButton = styled.div`
  width: 10%;
  & .AllPostCard {
    border: 1px solid;
  }
  & .AllPostWrap {
    width: 80px;
    cursor: pointer;
  }
  & .AllPostImg {
    height: 80px;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  & .AllPostImg img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  & .AllPostBox {
    display: flex;
    justify-content: center;
  }
  & .AllPostTxt {
  }
  & .AllPostTxt span {
    font-size: 16px;
    color: #333333;
  }
`;
// insert button
export const InsertButton = styled.div`
  & .InsertCard {
    width: 10%;
    border: 1px solid;
  }
  & .InsertWrap {
    width: 80px;
    cursor: pointer;
  }
  & .InsertImg {
    height: 80px;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  & .InsertImg img {
    width: 100%;
  }
  & .InsertBox {
    display: flex;
    justify-content: center;
  }
  & .InsertTxt {
  }
  & .InsertTxt span {
    font-size: 16px;
    color: #333333;
  }
`;
