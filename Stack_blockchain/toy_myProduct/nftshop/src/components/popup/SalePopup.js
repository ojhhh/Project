import React from "react";
import { SalePopupWrap, PopupMain } from "./SalePopup.styled";

const SalePopup = ({ salePopHandler }) => {
  return (
    <SalePopupWrap>
      <PopupMain>
        <div className="popupTitle">
          <h2>NFT 판매</h2>
        </div>
        <div onClick={salePopHandler} className="popupClose">
          <div className="xBtn" />
        </div>
      </PopupMain>
    </SalePopupWrap>
  );
};

export default SalePopup;
