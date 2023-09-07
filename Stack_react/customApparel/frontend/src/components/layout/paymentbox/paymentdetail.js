// import React, { useRef, useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getPaymentDetailinfo,
//   getPaymenthistorydetails,
// } from "../../../features/paymentslice";
// import "./Paymentdetail.css"; // Import your CSS file for styling
// const Paymentdetail = () => {
//   const dispatch = useDispatch();
//   const [paymentdata, setPaymentdata] = useState(null);
//   const [selectedDetailIndex, setSelectedDetailIndex] = useState(null);
//   const paymentdata2 = useSelector((state) => state.payment.data);
//   const paymentdataHIS = useSelector((state) => state.payment.paymentdata);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = dispatch(getPaymentDetailinfo());
//         const paymentNumbers = data.payload.Unique_payment_number.split(",");
//         setPaymentdata(paymentNumbers);
//       } catch (error) {
//         console.error("오류", error);
//       }
//     };
//     fetchData();
//   }, [dispatch]);

//   useEffect(() => {
//     console.log(paymentdata);
//     // if (paymentdata) {
//     //   dispatch(getPaymenthistorydetails(paymentdata));
//     // }
//   }, [paymentdata]);

//   const handlePaymentDetail = (indexToSpecific) => {
//     setSelectedDetailIndex((prevIndex) =>
//       prevIndex === indexToSpecific ? null : indexToSpecific
//     );
//   };

//   return (
//     <div>
//       <ul>
//         {paymentdata &&
//           paymentdata.map((element, index) => (
//             <li key={index}>
//               <button
//                 className="details-button"
//                 onClick={() => handlePaymentDetail(index)}
//               >
//                 자세히보기
//               </button>
//               {paymentdataHIS[index].response.name}
//               {selectedDetailIndex === index && (
//                 <div className="details">
//                   {paymentdataHIS[index].response.amount}
//                   {paymentdataHIS[index].response.name}
//                   {paymentdataHIS[index].response.status}
//                 </div>
//               )}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default Paymentdetail;
import { paymentcancel } from "../../../features/paymentslice";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useQuery } from "react-query";
import axios from "axios";
// import "./Paymentdetail.css"; // Import your CSS file for styling
import { Paymentdetailwrapper } from "./Paymentdetail.styled";
const PROXY = process.env.REACT_APP_PROXY;

const Paymentdetail = () => {
  const dispatch = useDispatch();
  const [selectedDetailIndex, setSelectedDetailIndex] = useState(null);

  const { data: paymentdata } = useQuery("paymentDetail", async () => {
    const response = await axios.get(`${PROXY}/payment/paymentdetail`, {
      withCredentials: true,
    });
    return response.data;
  });
  const handleSubmit = async (data) => {
    // Create formData here
    // const form = {};
    // console.log(data);
    // formData.append("merchant_uid", data);

    // for (let value of formData.values()) {
    //   console.log(value);
    // }
    // setFormData(formData);
    // console.log("handleSubmit 작동함");
    dispatch(paymentcancel(data));
  };
  // Fetch payment history data using React Query
  const { data: paymentdataHIS } = useQuery(
    "paymentHistory",
    async () => {
      if (paymentdata) {
        const response = await axios.post(
          `${PROXY}/payment/paymenthistorydetails`,
          { array: paymentdata.Unique_payment_number.split(",") },
          {
            withCredentials: true,
          }
        );
        // console.log(response.data);
        return response.data;
      }
    },
    {
      enabled: !!paymentdata, // Enable this query only if paymentdata is available
    }
  );

  if (paymentdata) {
    // console.log(paymentdata);
    // console.log(paymentdataHIS);
  }

  const handlePaymentDetail = (indexToSpecific) => {
    setSelectedDetailIndex((prevIndex) =>
      prevIndex === indexToSpecific ? null : indexToSpecific
    );
  };

  const handlereturncall = () => {
    alert("반품신청이 완료되었습니다.");
  };
  const handleaddcart = () => {
    alert("선택하신 물품이 장바구니에 추가되었습니다.");
  };
  return (
    <div>
      <Paymentdetailwrapper>
        <div className="main">
          {paymentdataHIS ? (
            paymentdataHIS.map((element, index) => (
              <div className="mainitembox" key={index}>
                <div className="paydateanddetailbox">
                  <div className="paydate">
                    {" "}
                    결제일:
                    {new Date(
                      parseInt(
                        paymentdataHIS[index]?.response.merchant_uid.replace(
                          "mid_",
                          ""
                        )
                      )
                    ).toLocaleDateString()}
                    <span>
                      결제상태:
                      {paymentdataHIS[index]?.response.status == "paid"
                        ? "결제 완료"
                        : "결제 취소"}
                    </span>
                  </div>
                  <div className="paydetailbutton">
                    <span
                      className="paydetailspan"
                      onClick={() => handlePaymentDetail(index)}
                    >
                      주문 상세보기
                    </span>
                  </div>
                </div>
                <div className="summarybox">
                  <table>
                    <colgroup>
                      <col width={600}></col>
                    </colgroup>
                    <tbody>
                      <tr>
                        <td className="summaryinnertabletd">
                          <div className="summaryinnerbox1">
                            배송지:
                            {paymentdataHIS[index]?.response.buyer_addr}
                          </div>
                          <div className="summaryinnerdownbox">
                            <div className="summaryinnerdownbox1">
                              <div className="shieldbox">
                                <div className="swordbox">
                                  <div className="shieldinnerbox">
                                    {" "}
                                    {paymentdataHIS[index]?.response.name}
                                  </div>
                                  <div className="shieldinnerbox">
                                    <div className="shieldinnerbox1">
                                      가격{" "}
                                      {paymentdataHIS[index]?.response.amount}원
                                    </div>
                                    <div className="shieldinnerbox2">
                                      <button
                                        className="shieldinnerbox2button"
                                        onClick={() => handleaddcart()}
                                      >
                                        장바구니에 추가하기
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="threebutton">
                            <button
                              onClick={() => {
                                handleSubmit(
                                  paymentdataHIS[index]?.response.merchant_uid
                                );
                              }}
                              className="threebuttonbutton"
                            >
                              주문취소
                            </button>
                            <button
                              className="threebuttonbutton1"
                              onClick={() => handlereturncall()}
                            >
                              반품 신청
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {selectedDetailIndex === index && (
                  <div className="details">
                    상품이름 :{paymentdataHIS[index]?.response.name}
                    <br />
                    가격 :{paymentdataHIS[index]?.response.amount}
                    <br />
                    구매자 이메일:{paymentdataHIS[index]?.response.buyer_email}
                    <br />
                    구매자 이름:{paymentdataHIS[index]?.response.buyer_name}
                    <br />
                    구매자 번호:{paymentdataHIS[index]?.response.buyer_tel}
                    <br />
                    배송지 주소:{paymentdataHIS[index]?.response.buyer_addr}
                    <br />
                    우편번호:{paymentdataHIS[index]?.response.buyer_postcode}
                    <br />
                    결제사:{paymentdataHIS[index]?.response.emb_pg_provider}
                    <br />
                    결제시간:{paymentdataHIS[index]?.response.paid_at}
                    <br />
                    결제상태:{paymentdataHIS[index]?.response.status}
                    <br />
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>Loading payment history data...</p>
          )}
        </div>
        {/* {paymentdataHIS ? (
          <ul>
            {paymentdataHIS.map((element, index) => (
              <li key={index}>
                {paymentdataHIS[index]?.response.name}
                <button
                  className="details-button"
                  onClick={() => handlePaymentDetail(index)}
                >
                  자세히보기
                </button>
                {selectedDetailIndex === index && (
                  <div className="details">
                    {paymentdataHIS[index]?.response.amount}
                    {paymentdataHIS[index]?.response.name}
                    {paymentdataHIS[index]?.response.status}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading payment history data...</p>
        )} */}
      </Paymentdetailwrapper>
    </div>
  );
};

export default Paymentdetail;
