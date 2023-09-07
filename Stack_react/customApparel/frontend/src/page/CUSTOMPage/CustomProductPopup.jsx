import React from "react";
import { PopupWrap, Closebtn } from "./CustomProductPopup.styled";
import { useSelector, useDispatch } from "react-redux";
import { clothType } from "../../features/clothslice";
import Canvas from "../../components/Canvas";
import { selectnumber } from "../../features/customslice";
import { decalClear } from "../../features//decalslice";

const CustomProductPopup = ({ handleProduct, num, product }) => {
  // customSlice의 초기값을 가져옴
  const shirtInfo = useSelector((state) => state.custom.basic);
  const { selectNum, setSelectNum } = num;
  // console.log(handleProduct);
  // console.log(product);

  const dispatch = useDispatch();

  function handleChangeProduct(e) {
    setSelectNum(e.currentTarget.id - 1);
    // console.log(e.currentTarget.id);
    dispatch(selectnumber(e.currentTarget.id));
    dispatch(decalClear());
    switch (e.currentTarget.id) {
      case "1":
        dispatch(clothType("tshirt"));
        break;
      case "2":
        dispatch(clothType("longsleeveshirt"));
        break;
      case "3":
        dispatch(clothType("onepiece"));
        break;
      case "4":
        dispatch(clothType("hoodie"));
        break;
    }
    handleProduct();
  }

  return (
    <>
      <PopupWrap>
        <div className="popupContainer">
          <div className="popupClose">
            <Closebtn onClick={handleProduct} />
          </div>
          <div className="popupTitle">
            <div className="title">
              <span>티셔츠/셔츠를 커스텀 해보세요.</span>
            </div>
          </div>
          <div className="popupBody">
            {/*  */}
            {shirtInfo.map((e) => {
              if (e.id != selectNum + 1) {
                return (
                  <div
                    className="popupCard"
                    key={e.id}
                    id={e.id}
                    onClick={handleChangeProduct}
                  >
                    <div className="cardImg">
                      <Canvas cloth2={e.cloth} product={product} />
                    </div>
                    <div className="cardText">
                      <span>{e.name}</span>
                      <span>{e.price} KRW</span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </PopupWrap>
    </>
  );
};

export default CustomProductPopup;
