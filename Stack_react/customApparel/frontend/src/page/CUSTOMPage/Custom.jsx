import React, { useState, useEffect, useRef } from "react";
import Nav from "../NavPage/Nav";
import {
  CustomWrap,
  CustomSideWrap,
  ColorPallet,
  SideSizeLi,
} from "./Custom.styled";
import CustomProductPopup from "./CustomProductPopup";
import CustomDecalsPopup from "./CustomDecalsPopup";
import CustomMyPicPopup from "./CustomMyPicPopup";
import { useSelector, useDispatch } from "react-redux";
import TwoDCanvas from "../../components/TwoDCanvas";
import { clothColor, clothCapture } from "../../features/clothslice";
import { decalText } from "../../features/decalslice";
import { customName, customNum } from "../../features/customslice";

import html2canvas from "html2canvas";

import axios from "axios";
const PROXY = process.env.REACT_APP_PROXY;
// custom 테이블 정보 가져오기
// async function getCustom() {
//   const { data } = await axios.get(`http://localhost:4000/custom`, {
//     withCredentials: true,
//   });
//   console.log(data);
// }
// getCustom();

const Custom = () => {
  const [product, setProduct] = useState(false);
  const [decals, setDecals] = useState(false);
  const [color, setColor] = useState("white");
  const [selectsize, setSelectsize] = useState("FREE");
  const [selectNum, setSelectNum] = useState(0);
  const dispatch = useDispatch();
  const [myPic, setMyPic] = useState(false);

  // customSlice의 초기값을 가져옴
  const shirtInfo = useSelector((state) => state.custom.basic);

  // 로그인된 아이디를 가져옴
  const getUserId = useSelector((state) => state.mypage.data);

  const decaldata = useSelector((state) => state.decal.decalName);
  const decaldata2 = useSelector((state) => state.decal.decalNum);
  const captureRef = useRef();

  const handleCapture = async () => {
    const canvasElement = document.querySelector(".customMain");
    await dispatch(clothCapture());

    html2canvas(canvasElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "screenshot.png";
      link.click();
    });

    await dispatch(clothCapture());
  };

  // 팝업창 크고 켜기
  function handleProduct() {
    setProduct(!product);
    // console.log(product);
  }
  // 팝업창 크고 켜기
  function handleDecals() {
    setDecals(!decals);
    // console.log(product);
  }
  // 선택된 색 활성화
  function handleColor(e) {
    setColor(e.target.getAttribute("bgcolor"));
    // 민우 리덕스 바꿔주면
    let newColor = e.target.getAttribute("bgcolor");
    dispatch(clothColor(newColor));
    // console.log("완료")

    // console.log("현재 리덕스 값", color);
  }

  // 선택된 사이즈 활성화
  function handelSelectSize(e) {
    setSelectsize(e.target.getAttribute("sizes"));
    // 민우 사이즈를 바꿔주면 -> 옷 사이즈 바뀜
  }

  // 사이즈가 추가되면 적용
  function ShirtInfo(shirtInfo, selectNum, selectsize) {
    return shirtInfo[selectNum].size.map((size, index) => (
      <SideSizeLi
        key={index}
        sizes={size}
        selectsize={selectsize}
        onClick={handelSelectSize}
      />
    ));
  }

  // 장바구니 담기 기능 (로컬 스토리지나 쿠키에 저장 할 예정)
  // 추후 데칼과 최종 이미지가 들어가야 함
  function handleCart() {
    if (getUserId?.user_id == undefined) return;

    // 장바구니에 추가 기능
    // tester에 사용자 이름이 들어가면 될듯
    const name = shirtInfo[selectNum].name;
    const price = shirtInfo[selectNum].price;
    const intprice = shirtInfo[selectNum].intprice;
    const count = shirtInfo[selectNum].count;
    const sum = shirtInfo[selectNum].sum;
    const decalNum = shirtInfo[selectNum].decalNum;
    const decaldata = shirtInfo[selectNum].decaldata;

    let cartInfo = localStorage.getItem(getUserId?.user_id);
    if (!cartInfo) {
      localStorage.setItem(
        getUserId?.user_id,
        JSON.stringify([
          {
            name,
            price,
            color,
            selectsize,
            intprice,
            count,
            sum,
            decalNum,
            decaldata,
          },
        ])
      );
    }
    if (cartInfo) {
      let newArr = {
        name,
        price,
        color,
        selectsize,
        intprice,
        count,
        sum,
        decalNum,
        decaldata,
      };

      let cartArr = JSON.parse(localStorage.getItem(getUserId?.user_id)) || [];

      // 중복 확인
      let duplicate = cartArr.some(
        (item) =>
          item.name === name &&
          item.color === color &&
          item.selectsize === selectsize
      );

      // 중복이 없으면 배열에 추가
      if (!duplicate) {
        cartArr.push(newArr);
        localStorage.setItem(getUserId?.user_id, JSON.stringify(cartArr));
      } else {
        console.log("이미 같은 상품이 장바구니에 있습니다.");
      }
    }
  }

  function ColorInfo(shirtInfo, selectNum) {
    return shirtInfo[selectNum].color.map((bgcolor, index) => (
      <ColorPallet
        key={index}
        onClick={handleColor}
        bgcolor={bgcolor}
        color={color}
      />
    ));
  }
  // 텍스트 추가하기
  function handleText() {
    dispatch(decalText());
  }

  function handleMypic() {
    setMyPic(!myPic);
  }
  useEffect(() => {
    // console.log("handlerDecal작동한거 관찰함");
    dispatch(customName(decaldata));
    dispatch(customNum(decaldata2));
  }, [handleDecals]);

  return (
    <div>
      {/* 팝업창이 나오는 부분  */}
      {product ? (
        <CustomProductPopup
          handleProduct={handleProduct}
          num={{ selectNum, setSelectNum }}
          product={product}
        />
      ) : null}
      {decals ? <CustomDecalsPopup handlerDecal={handleDecals} /> : null}
      {myPic ? <CustomMyPicPopup handlerMyPic={handleMypic} /> : null}
      <Nav />
      <CustomWrap>
        <div className="customMainWrap">
          <div className="customMain" ref={captureRef}>
            <TwoDCanvas></TwoDCanvas>
            {/* <CanvasComponent setGl={setGl} /> */}
          </div>
        </div>
        {/* CustomSideWrap 부분 나중에 components로 이동 예정*/}
        <CustomSideWrap>
          <div className="customSide">
            <div className="sideTitle">
              <span>{shirtInfo[selectNum].name}</span>
              <span>{shirtInfo[selectNum].price + " KRW"}</span>
              <div className="btnWrap">
                <div className="productWrap" onClick={handleProduct}>
                  <div className="changeProductBtn">
                    <img src={`${PROXY}/img/clothes.png`} />
                  </div>
                  <span>PRODUCT</span>
                </div>

                <div className="imageWrap" onClick={handleDecals}>
                  <div className="addImageBtn">
                    <img src={`${PROXY}/img/smile.png`} />
                  </div>
                  <span>DECALS</span>
                </div>
                <div className="productWrap" onClick={handleText}>
                  <div className="changeProductBtn">
                    <img src={`${PROXY}/img/lettert.png`} />
                  </div>
                  <span>TEXT</span>
                </div>
                <div className="productWrap" onClick={handleMypic}>
                  <div className="changeProductBtn">
                    <img src={`${PROXY}/img/mypicture2.png`} />
                  </div>
                  <span>MyPicture</span>
                </div>
                <div className="imageWrap">
                  {/*  */}
                  <button
                    className="obutton obuttoncap"
                    onClick={handleCapture}
                  >
                    캡쳐 하기
                  </button>
                </div>
              </div>
            </div>
            {/* componet로 분리 할 부분 */}
            <div className="sideColor">
              <span>색상 - {color}</span>
              <ul>
                {/* 색깔별로 원을 생성함 나중에 map 돌릴 부분*/}
                {ColorInfo(shirtInfo, selectNum, selectsize)}
              </ul>
            </div>
            {/* componet로 분리 할 부분 */}

            <div className="sideSize">
              <span>사이즈</span>
              <ul>
                {/* 사이즈별 맵 돌릴 예정? */}
                {ShirtInfo(shirtInfo, selectNum, selectsize)}
                {/* <SideSizeLi size={"free"} selectsize={selectsize} /> */}
              </ul>
            </div>
            <div className="delivery">
              <span>배송비</span>
              <span>3,000KRW</span>
            </div>
            <div className="sideCart">
              <div className="cartBtn" onClick={handleCart}>
                장바구니 담기
              </div>
            </div>
          </div>
        </CustomSideWrap>
        {/* CustomSideWrap 부분 나중에 components로 이동 예정*/}
      </CustomWrap>
    </div>
  );
};

export default Custom;
