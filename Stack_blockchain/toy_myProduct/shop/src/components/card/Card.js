import React from "react";
import { ProductCard, Group } from "./Card.styled";

const Card = ({ nftlist }) => {
  console.log("nftlist : ", nftlist);

  return nftlist.map((item, index) => (
    <ProductCard key={index}>
      <div className="cardImg">
        {/* 이미지 경로 바꾸기 */}
        <img src={`${item.image}`} alt="" />
      </div>
      <div className="cardText">
        <div className="nftTitle">
          <span>{item.name}</span>
        </div>
        <div className="nftOwner">
          <span>{item.owner.slice(0, 5) + "..." + item.owner.slice(-4)}</span>
        </div>
        <div className="nftPrice">
          <Group>
            <span>Price</span>
          </Group>
          <Group>
            <img
              src={`${process.env.PUBLIC_URL}/images/ether_price.png`}
              alt=""
            />
            <span>{item.price / 1000}</span>
          </Group>
        </div>
        <div className="buyBtn">
          <span>Buy now</span>
        </div>
      </div>
    </ProductCard>
  ));
};

export default Card;
