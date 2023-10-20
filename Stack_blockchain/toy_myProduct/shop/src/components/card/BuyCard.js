import React from "react";
import { ProductBuyCard, Group } from "./BuyCard.styled";

const BuyCard = () => {
  return (
    <ProductBuyCard>
      <div className="cardImg">
        {/* 이미지 경로 바꾸기 */}
        <img src={`${process.env.PUBLIC_URL}/images/test.png`} alt="" />
      </div>
      <div className="cardText">
        <div className="nftTitle">
          <span>#1</span>
        </div>
        <div className="nftOwner">
          <span>account</span>
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
            <span>0.001</span>
          </Group>
        </div>
      </div>
    </ProductBuyCard>
  );
};

export default BuyCard;
