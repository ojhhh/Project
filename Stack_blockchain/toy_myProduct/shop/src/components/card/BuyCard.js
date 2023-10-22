import React, { useState, useEffect, useContext } from "react";
import { ProductBuyCard, Group } from "./BuyCard.styled";
import Global from "../../Global";

const BuyCard = () => {
  const { user, web3, contract, nftlist } = useContext(Global);
  const [buyNFT, setBuyNFT] = useState([]);

  useEffect(() => {
    if (contract) {
      (async () => {
        const getBuylist = await contract.methods.getBuylist().call();
        setBuyNFT(getBuylist);
      })();
    }
  }, [contract]);

  return buyNFT
    .filter((item) => item.owner == user.account && item.accept == true)
    .map((item) => (
      <ProductBuyCard>
        <div className="cardImg">
          {/* 이미지 경로 바꾸기 */}
          <img src={`${process.env.PUBLIC_URL}/images/test.png`} alt="" />
        </div>
        <div className="cardText">
          <div className="nftTitle">
            <span>#{item.tokenId}</span>
          </div>
          <div className="nftOwner">
            <span>{item.offer}</span>
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
      </ProductBuyCard>
    ));
};

export default BuyCard;
