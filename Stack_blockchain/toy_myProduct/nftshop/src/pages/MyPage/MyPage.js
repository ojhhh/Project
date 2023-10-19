import React, { useState, useEffect } from "react";
import {
  MyPageWrap,
  MyPageProfile,
  Taplayer,
  MyPageBody,
  Group,
} from "./MyPage.styled";
import Header from "../Header/Header";

const MyPage = () => {
  // 메타마스크 정보 가져오기

  return (
    <>
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
          <div className="bodyTabs"></div>
        </MyPageBody>
      </MyPageWrap>
      ;
    </>
  );
};

export default MyPage;
