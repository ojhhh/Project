import { Select } from "@react-three/drei";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postpaymentsucceeded } from "../../../features/paymentslice";
import { IndexPayment } from "./IndexPaymnet.styled";
import { useNavigate } from "react-router-dom";

const Payment = (props) => {
  const navigate = useNavigate();

  // console.log("Payment 컴포넌트", props.productinfo.selected);
  const dispatch = useDispatch();
  const userinformation = useSelector((state) => state.mypage.data);

  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [nonenull, setNull] = useState(null);
  const [productname, setProductname] = useState("");
  const paymentSucceededTime = new Date().getTime();
  const merchantUid = `mid_${paymentSucceededTime}`;
  // const data = useSelector((state) => state.payment.data);

  const handleLinkClick = () => {
    navigate("/Custom"); // Navigate to the 'Details' screen
  };
  useEffect(() => {
    // console.log("userinformation", userinformation);
    let totalPrice = 0;
    let totalCount = 0;
    let proName = "";
    for (const value of props.productinfo.selected) {
      totalPrice = totalPrice + value.sum + value.decalNum * 1500;
      totalCount += value.count;
      // console.log(value.sum);
      // console.log(value.count);
      setPrice(totalPrice);
      setCount(totalCount);

      if (count > 1) {
        proName = `${props.productinfo.selected[0].name} 외 ${totalCount} 개`;
        // console.log("Payment 주문명.", proName);
      } else {
        try {
          proName = `${props.productinfo.selected[0].name} 1 개`;
          // console.log("Payment 주문명.", proName);
        } catch (error) {
          console.log(error);
        }
      }
      setProductname(proName);
    }

    // setPrice(totalPrice);
  }, [props.productinfo.selected]);

  useEffect(() => {
    // console.log("Payment 주문명 가격 개수", productname, price, count);
  }, [productname, price, count]);

  const data = {
    pg: "html5_inicis", // PG사
    pay_method: "card", // 결제수단
    merchant_uid: merchantUid, // 주문번호
    amount: `${price}`, // 결제금액
    name: `IKE 상품구매 ${productname}`, // 주문명
    buyer_name: `${userinformation.Nick}`, // 구매자 이름
    buyer_tel: "01012341234", // 구매자 전화번호
    buyer_email: "example@example", // 구매자 이메일
    buyer_addr: "경일아카데미", // 구매자 주소
    buyer_postcode: "06018", // 구매자 우편번호
  };

  function onClickPayment() {
    // console.log("Payment 주문명 가격 개수2", productname, price, count);

    props.productinfo.handlepaymentinput();
    const { IMP } = window;
    IMP.init("imp84308847"); //발급받은 가맹점 식별코드를 사용합니다.
    // console.log("onClickPayment", paymentSucceededTime, data);
    IMP.request_pay(data, callback);
  }
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");
      props.productinfo.handlepaymentinput2();

      dispatch(postpaymentsucceeded(merchantUid));
    } else {
      props.productinfo.handlepaymentinput3();

      alert(`결제 실패: ${error_msg}`);
    }
  }
  return (
    <div>
      <IndexPayment>
        <button className="asd1" onClick={handleLinkClick}>
          계속 쇼핑하기
        </button>
        <button className="asd" onClick={onClickPayment}>
          결제하기
        </button>
      </IndexPayment>
    </div>
  );
};

export default Payment;
