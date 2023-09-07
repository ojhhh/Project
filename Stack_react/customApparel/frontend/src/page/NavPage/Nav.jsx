import React, { useState, useEffect } from "react";
import { Navdiv, NavLink } from "./Nav.styled";
import { useDispatch } from "react-redux";
import { getmypageinfo } from "../..//features/mypageslice";
import { userlogout } from "../../features/mainslice";
import { userdataclear } from "../../features/mainslice";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch();
  const [userloginstate, setuserloginstate] = useState(false);
  const [userlogin, setuserlogin] = useState("");
  const location = useLocation();
  const navigator = useNavigate();
  useEffect(() => {
    // getmypageinfo 액션을 디스패치하고, 반환 함수를 사용하여 data 변수를 업데이트
    const fetchData = async () => {
      const data = await dispatch(getmypageinfo());
      if (location.pathname === "/admin" && data.payload.user_id !== "admin") {
        alert("접근할 수 없습니다.");
        navigator("/");
      }

      if (data.payload == "다시 로그인해주세요") {
        console.log("다시 로그인해주세요");
      } else {
        setuserloginstate(true);
      }

      setuserlogin(
        data.payload.id ? `LOGOUT:${data.payload.Nick}` : "로그인하기"
      );
    };
    fetchData();
  }, [dispatch]);
  const handlelogbutton = () => {
    // console.log("handlelogbutton");
    dispatch(userlogout());
    setuserlogin("로그인하기");
    setuserloginstate(false);
    dispatch(userdataclear());
  };

  // useEffect(() => {
  //   dispatch(getmypageinfo());
  // }, []);
  return (
    <Navdiv>
      <div className="navContainer">
        <div className="logo">
          <span>
            <NavLink to={"/"}>CUSTOMAPPAREL</NavLink>
          </span>
        </div>
        <div className="menutabs">
          <ul>
            <li>
              <NavLink to={"/custom"}> CUSTOM</NavLink>
            </li>
            <li>
              <NavLink to={"/photo"}> PHOTO</NavLink>
            </li>
            <li>
              {userloginstate ? (
                <NavLink onClick={() => handlelogbutton()}>{userlogin}</NavLink>
              ) : (
                <NavLink to={"/login"}> {userlogin}</NavLink>
              )}
            </li>
            {/* <NavLink to={"/login"}> login</NavLink> */}
            {userloginstate ? null : (
              <li>
                <NavLink to={"/signup"}> SIGNUP</NavLink>
              </li>
            )}
            {userloginstate ? (
              <li>
                <NavLink to={"/mypage"}> MYPAGE</NavLink>
              </li>
            ) : null}

            <li>
              <NavLink to={"/cartp"}> CART</NavLink>
            </li>
            <li>
              <NavLink to={"/paymentdetail"}> PAYMENTDETAIL</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Navdiv>
  );
};

export default Nav;
