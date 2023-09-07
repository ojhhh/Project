import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Payment from "../../layout/paymentbox";
import { Cartwrapper } from "./Cart.styled";

const Cart = () => {
  const userdata = useSelector((state) => state.mypage.data);
  // const decalText = useSelector((state) => state.decal.decalText);
  // const decalMyPic = useSelector((state) => state.decal.decalMyPic);
  const [paymentProgress, setPaymentProgress] = useState(0);
  const storedValue = JSON.parse(localStorage.getItem(userdata.user_id)) || [];
  const [selected, setSelected] = useState(storedValue);
  // console.log("Cart", userdata);
  // console.log("decal데이터들", decaldata, decalNum);
  useEffect(() => {
    const backgroundPosition = -200 + paymentProgress;
    const cartTitle = document.querySelector(".carttitle");

    if (cartTitle) {
      cartTitle.style.backgroundPosition = `0 ${backgroundPosition}px`;
    }
  }, [paymentProgress]);
  const handleRemoveItem = (indexToRemove) => {
    const updatedSelected = selected.filter(
      (_, index) => index !== indexToRemove
    );
    setSelected(updatedSelected);
    localStorage.setItem(userdata.user_id, JSON.stringify(updatedSelected));
  };
  const handlepaymentinput = () => {
    setPaymentProgress(paymentProgress + 100);
  };
  const handlepaymentinput2 = () => {
    setPaymentProgress(paymentProgress + 50);
  };
  const handlepaymentinput3 = () => {
    setPaymentProgress(0);
  };
  const handleSelectChange = (event, index) => {
    // console.log("상호작용이 작동함");
    const selectedValue = event.target.value;
    // console.log(`Selected value for row ${index}:`, selectedValue);
    // Now you can use the selected value as needed
    let updatecountItem = JSON.parse(localStorage.getItem(userdata.user_id));
    updatecountItem[index].count = parseInt(selectedValue);
    updatecountItem[index].sum =
      updatecountItem[index].intprice * parseInt(selectedValue);
    localStorage.setItem(userdata.user_id, JSON.stringify(updatecountItem));
    setSelected(updatecountItem);
  };
  // useEffect(() => {
  // console.log("원래 이벤트 자동 발동 ");
  //   selected.forEach((value, index) => {
  //     const selectElement = document.getElementById(`quantitySelect_${index}`);
  //     if (selectElement) {
  //       const event = new Event("change");
  //       selectElement.dispatchEvent(event);
  //     }
  //   });
  // }, [selected]);
  useEffect(() => {
    selected.forEach((_, index) => {
      handleSelectChange({ target: { value: selected[index].count } }, index);
    });
  }, []);

  return (
    <div>
      <Cartwrapper>
        <div className="carttitle"></div>
        {/* {userdata.map((value, index) => {
        console.log("userdata",value);
      })} */}
        <table className="cartTable">
          <thead>
            <tr className="head">
              <th
                className="info2"
                scope="colgroup"
                id="th-product-box"
                colspan="2"
              >
                상품정보
              </th>
              <th scope="col" className="info">
                상품금액
              </th>
              <th scope="col" className="info">
                배송비
              </th>
            </tr>
          </thead>
          <tbody>
            {selected.map((value, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td className="productbox">
                  <div className="prodcutnamebox"> 제품 이름: {value.name}</div>
                  <div>
                    옵션: {value.color} {value.selectsize}
                    <br />
                    데칼 옵션 및 개수:
                    {value.decaldata} {value.decalNum}개
                    <div className="optionpricepart">
                      {value.price}{" "}
                      <span>
                        <select
                          id={`quantitySelect_${index}`}
                          onChange={(event) => handleSelectChange(event, index)}
                          value={value.count}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </span>{" "}
                    </div>
                  </div>
                </td>
                <td className="totalprice">
                  <span className="price">
                    {parseInt(value.price) * 1000 +
                      value.intprice * value.count +
                      value.decalNum * 1500}
                  </span>
                </td>
                <td className="totalprice">
                  {" "}
                  <span className="price">3000원</span>
                </td>
                <button
                  className="removebutton"
                  onClick={() => handleRemoveItem(index)}
                ></button>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="orderbuttons">
          <Payment
            productinfo={{
              selected,
              userdata,
              handlepaymentinput,
              handlepaymentinput2,
              handlepaymentinput3,
            }}
          />
        </div>
      </Cartwrapper>
    </div>
  );
};

export default Cart;
