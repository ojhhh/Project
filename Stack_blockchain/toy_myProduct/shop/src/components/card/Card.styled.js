import styled, { keyframes } from "styled-components";

export const ProductCard = styled.div`
  width: 220px;
  height: 300px;
  margin: 10px 5px 10px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &:nth-child(5n) {
    margin-right: 0;
  }
  & .cardImg {
    width: 100%;
    height: 220px;
    overflow: hidden;
    box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
  }
  & .cardImg img {
    width: 100%;
    transition: transform 0.3s;
  }

  & .cardText {
    padding: 0 10px;
  }
  & .nftTitle {
    margin-top: 5px;
  }

  & .nftTitle span {
    font-weight: 800;
  }
  & .nftOwner {
    margin-bottom: 5px;
  }
  & .nftOwner span {
    font-weight: 300;
    font-size: 10px;
  }
  & .nftPrice {
  }
  & .nftPrice span:first-child {
    font-weight: 400;
    font-size: 10px;
    color: rgba(0, 0, 0, 0.6);
  }

  & .nftPrice img {
    width: 15px;
    height: 15px;
  }

  & .buyBtn {
    position: absolute;
    left: 0;
    bottom: -40px;
    width: 100%;
    height: 40px;
    background-color: rgba(0, 0, 0, 1);
    transition: 0.2s linear;
    display: grid;
    place-items: center;
  }

  & .buyBtn span {
    color: white;
    font-size: 20px;
  }

  &:hover .cardImg img {
    transform: scale(1.1);
  }

  &:hover .buyBtn {
    bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;
