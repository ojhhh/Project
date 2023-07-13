import React, { useState, useEffect } from "react";
import { MainWrap } from "./Main.styled";
import { Link } from "react-router-dom";
import { Header } from "../../layout";
import { loginAction } from "../../../middleware";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const loginChk = useSelector((state) => state.logins.isLogin);

  useEffect(() => {
    // console.log(userId);
  }, [userId]);
  useEffect(() => {
    // console.log(userPw);
  }, [userPw]);
  useEffect(() => {
    // console.log(loginChk);
    if (loginChk) {
      nav("/posts");
    }
  }, [loginChk]);

  function getUserInfo() {
    dispatch(loginAction.login(userId, userPw));
  }
  function logOut() {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <div>
      <MainWrap>
        <div className="container">
          <Header page={"LOGIN"} />
          {/* loginWrap */}
          <div className="loginWrap">
            <div className="loginContainer">
              <label>ID</label>
              <input onChange={(e) => setUserId(e.target.value)}></input>
              <label>PW</label>
              <input
                type="password"
                onChange={(e) => setUserPw(e.target.value)}
              ></input>
            </div>
            {loginChk ? (
              <button onClick={logOut}>logout</button>
            ) : (
              <button onClick={getUserInfo}>login</button>
            )}
            {!loginChk && <Link to="/sign">signup</Link>}
          </div>
          {/*  */}
        </div>
      </MainWrap>
    </div>
  );
};

export default Main;
