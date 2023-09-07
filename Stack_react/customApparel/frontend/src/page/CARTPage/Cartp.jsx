import React from "react";
import Cart from "../../components/layout/paymentbox/cart";
import Nav from "../NavPage/Nav";
import { MainWrap } from "../MainPage/Main.styled";
import { useSelector } from "react-redux";

const Cartp = () => {
  const userdata = useSelector((state) => state.mypage.data);

  return (
    <div>
      <Nav />
      <MainWrap>{userdata?.user_id ? <Cart /> : null}</MainWrap>
    </div>
  );
};

export default Cartp;
