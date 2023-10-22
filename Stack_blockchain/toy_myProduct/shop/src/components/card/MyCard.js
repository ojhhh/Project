import React, { useState, useEffect, useContext } from "react";
import { ProductMyCard, Group } from "./MyCard.styled";
import Global from "../../Global";

const MyCard = () => {
  const { user, nftlist } = useContext(Global);

  return nftlist
    .filter((item) => item.owner == user.account)
    .map((item, index) => (
      <ProductMyCard key={index}>
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
        </div>
      </ProductMyCard>
    ));
};

export default MyCard;
