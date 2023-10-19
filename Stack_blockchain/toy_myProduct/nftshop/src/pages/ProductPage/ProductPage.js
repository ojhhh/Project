import React from "react";
import Header from "../Header/Header.js";
import {
  ProductPageWrap,
  ProductPageTop,
  ProductTopInputWrap,
  ProductTopMenuWrap,
  ProductPageBodyWrap,
  ProductPageSideWrap,
  ProductPageMainWrap,
  ProductPageMainBtns,
  ProductPageMain,
  UnderArrowImage,
  ToggleBtnImage,
  Group,
} from "./ProductPage.styled";
import { Link } from "react-router-dom";

import Card from "../../components/card/Card";

const ProductPage = () => {
  return (
    <>
      <Header />
      <ProductPageWrap>
        <ProductPageTop>
          <div className="topWrap">
            <ProductTopInputWrap>
              <div className="searchInput">
                <img
                  src={`${process.env.PUBLIC_URL}/images/magnifying-glass-solid.svg`}
                  alt=""
                />
                <input
                  type="text"
                  placeholder="Search NFTs, Collections, accounts "
                />
              </div>
            </ProductTopInputWrap>

            <ProductTopMenuWrap>
              <div className="cryptoBtn">
                <span>Crypto</span>
              </div>
              <div className="ordinalsBtn">
                <span>Ordinals</span>
              </div>
              <div className="nftMarketBtn">
                <span>NFT Market</span>
              </div>
              <div className="rankingsBtn">
                <span>Rankings</span>
              </div>
              <div className="launchpadBtn">
                <span>Launchpad</span>
              </div>
              <div className="saleBtn">
                <img
                  src={`${process.env.PUBLIC_URL}/images/square-plus-regular.svg`}
                  alt=""
                />
              </div>
              <div className="profileBtn">
                <Link to="/mypage">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/user-regular.svg`}
                    alt=""
                  />
                </Link>
              </div>
            </ProductTopMenuWrap>
          </div>
        </ProductPageTop>
        <ProductPageBodyWrap>
          <ProductPageSideWrap>
            <div className="networkTap">
              <div className="networkTapBox">
                <img
                  src={`${process.env.PUBLIC_URL}/images/ether.png`}
                  alt=""
                />
                <span>Ethereum</span>
              </div>
              <UnderArrowImage />
            </div>
            <div className="verifiedTap">
              <span>Verified</span>
              <ToggleBtnImage />
            </div>
            <div className="statusTap">
              <span>Status</span>
              <UnderArrowImage />
            </div>
            <div className="priceTap">
              <span>Price</span>
              <UnderArrowImage />
            </div>
            <div className="orderSourceTap">
              <span>Order Source</span>
              <UnderArrowImage />
            </div>
            <div className="colletionsTap">
              <span>Colletions</span>
              <UnderArrowImage />
            </div>
            <div className="categoriesTap">
              <span>Categories</span>
              <UnderArrowImage />
            </div>
          </ProductPageSideWrap>
          <ProductPageMainWrap>
            <ProductPageMainBtns>
              <Group>
                <div className="filterBtn">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/arrow-left-long-solid.svg`}
                    alt=""
                  />
                  <span>Filters</span>
                </div>
                <div className="refreshBtn">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/arrows-rotate-solid.svg`}
                    alt=""
                  />
                </div>
              </Group>

              <Group>
                <div className="sortBtn">
                  <span>Recent activity</span>
                  <UnderArrowImage />
                </div>
                <div className="layoutBtn">
                  <div className="tableBtn">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/table-cells-large-solid.svg`}
                      alt=""
                    />
                  </div>
                  <div className="tableBtn">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/table-cells-solid.svg`}
                      alt=""
                    />
                  </div>
                </div>
              </Group>
            </ProductPageMainBtns>
            <ProductPageMain>
              {/* CardComponent start */}
              <Card />
            </ProductPageMain>
          </ProductPageMainWrap>
        </ProductPageBodyWrap>
      </ProductPageWrap>
    </>
  );
};

export default ProductPage;
