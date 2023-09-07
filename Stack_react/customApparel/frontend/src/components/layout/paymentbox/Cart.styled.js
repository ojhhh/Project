import styled from "styled-components";

export const Cartwrapper = styled.div`
  & .head {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  & .info {
    height: 40px;
    font-size: 13px;
    padding-left: 12px;
  }
  & .info2 {
    height: 40px;
    font-size: 13px;
    padding-left: 257px;
  }
  & .cartTable {
    width: 899px;
    border-top: 0;
  }
  & .productbox {
    padding: 10px 5px 10px 15px;
    text-align: left;
    width: 568px;

    vertical-align: top;
    z-index: 100;
  }
  & .prodcutnamebox {
    padding-left: 50px;
    border-bottom: 1px solid #e2e5e7;
    padding-bottom: 5px;
    letter-spacing: -1px;
  }
  & .optionpricepart {
    float: right;
    font-size: 12px;
    line-height: 24px;
  }
  & .removebutton {
    position: relative;
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-top: 32px;
    margin-left: 20px;
    padding-left: 10px;
    background: url(//img1a.coupangcdn.com/image/cart/generalCart/cart_sprite_170201.png) -117px
      0 no-repeat;
    vertical-align: top;
    z-index: 120;
  }
  & .totalprice {
    position: relative;
    line-height: normal;
    border-left: 1px solid #ddd;
    font-size: 12px;
    color: #888;
  }
  & .price {
    padding-left: 15px;
  }
  & .orderbuttons {
    margin-top: 30px;
    text-align: center;
    position: relative;
  }
  & .carttitle {
    clear: both;
    height: 45px;
    margin-bottom: 0;
    padding-bottom: 32px;
    background: url(//img1a.coupangcdn.com/image/order/img_orderstep4.gif)
      no-repeat 0 -200px;
  }
`;
