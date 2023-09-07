import React from "react";
import Paymentdetail from "../../components/layout/paymentbox/paymentdetail";
import Nav from "../NavPage/Nav";
import { MainWrap } from "../MainPage/Main.styled";
const PayMentDetail = () => {
  return (
    <div>
      <Nav />
      <MainWrap>
        <Paymentdetail />
      </MainWrap>
    </div>
  );
};

export default PayMentDetail;
