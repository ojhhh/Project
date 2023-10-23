import React, { useContext } from "react";
import Global from "../../Global";
import { ProductCard, Group } from "./Card.styled";

const Card = ({ nftlist }) => {
  const { user, web3, contract } = useContext(Global);

  const handleBuyNFT = async (tokenId) => {
    try {
      const ownerOf = await contract.methods.ownerOf(tokenId).call();

      const ether = 0.001;
      const _ether = await web3.utils.toWei(ether.toString(), "ether");

      const buynft = await contract.methods
        .buyNFT(tokenId)
        .send({ from: user.account, gas: "300000", value: _ether });

      // console.log("buynft : ", buynft);
    } catch (error) {
      console.error(error);
    }
  };

  return nftlist.map((item, index) => (
    <ProductCard key={index} onClick={() => handleBuyNFT(item.tokenId)}>
      <div className="cardImg">
        {/* 이미지 경로 바꾸기 */}
        <img src={`${item.image}`} alt="" />
      </div>
      <div className="cardText">
        <div className="nftTitle">
          <span>{item.name + "#" + item.tokenId}</span>
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
