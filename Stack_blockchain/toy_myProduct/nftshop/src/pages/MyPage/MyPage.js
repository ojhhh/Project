import React, { useState, useEffect } from "react";
import {
  MyPageWrap,
  MyPageProfile,
  Taplayer,
  MyPageBody,
  BodyTabs,
  BodyFilter,
  MyPageCard,
  Group,
} from "./MyPage.styled";
import Header from "../Header/Header";
import MyCard from "../../components/card/MyCard";
import SalePopup from "../../components/popup/SalePopup";

const MyPage = () => {
  // 메타마스크 정보 가져오기
  const [salePop, setSalePop] = useState(false);

  const salePopHandler = () => {
    setSalePop(!salePop);
  };

  useEffect(() => {
    // console.log(salePop);
  }, [salePop]);

  return (
    <>
      {salePop ? <SalePopup salePopHandler={salePopHandler} /> : null}
      <Header />
      <MyPageWrap>
        <MyPageProfile>
          <div className="profileWrap">
            <div className="profileInfo">
              <div className="profileImg">
                {/* 프로필 이미지가 없으니 임시 */}
                {/* <img src="" alt=""/> */}
                <div className="tmpImg" />
              </div>
              <div>
                <div className="userAccount">
                  <span>0xFDJFOI...DSF2</span>
                  <div className="copyBtn"></div>
                </div>
                <div className="userBalance">
                  <span>$0.00</span>
                </div>
              </div>
            </div>
          </div>
        </MyPageProfile>
        <Taplayer>
          <div className="tablayerWrap">
            <Group>
              <div className="summaryTap">
                <span>Summary</span>
              </div>
              <div className="cryptoTap">
                <span>Crypto</span>
              </div>
              <div className="nftsTap">
                <span>NFTs</span>
              </div>
              <div className="DeFiTap">
                <span>DeFi</span>
              </div>
              <div className="approvalsTap">
                <span>Approvals</span>
              </div>
              <div className="historyTap">
                <span>History</span>
              </div>
            </Group>

            <Group>
              <div className="networksTap"></div>
            </Group>
          </div>
        </Taplayer>
        <MyPageBody>
          <BodyTabs>
            <Group>
              <div className="callectedTab">
                <span>Callected</span>
              </div>
              <div className="activityTab">
                <span>Activity</span>
              </div>
              <div className="nftordersTab">
                <span>NFT orders</span>
              </div>
            </Group>
            <Group>
              {/* 판매하기 버튼 기능 추가 예정 */}
              <div onClick={salePopHandler} className="saleBtn">
                <span>NFT MITING</span>
              </div>
            </Group>
          </BodyTabs>

          <BodyFilter>
            <Group>
              <div className="filterBtn">
                <img
                  src={`${process.env.PUBLIC_URL}/images/filter-solid.svg`}
                  alt=""
                />
                <span>Filters</span>
              </div>
            </Group>
            <Group>
              <div className="filterInput">
                <img
                  src={`${process.env.PUBLIC_URL}/images/magnifying-glass-solid.svg`}
                  alt=""
                />
                <input type="text" placeholder="Search" />
              </div>
              <div className="sortTab">
                <span>Recently received</span>
                <img
                  src={`${process.env.PUBLIC_URL}/images/chevron-down-solid.svg`}
                  alt=""
                />
              </div>
            </Group>
          </BodyFilter>

          <MyPageCard>
            <MyCard />
          </MyPageCard>
        </MyPageBody>
      </MyPageWrap>
      ;
    </>
  );
};

export default MyPage;
