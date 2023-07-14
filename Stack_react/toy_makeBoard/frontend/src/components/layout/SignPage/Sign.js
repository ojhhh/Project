import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignWrap } from "./Sign.styled";
import { Header } from "../../layout";
import { signAction } from "../../../middleware";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");
  useEffect(() => {
    // console.log(userId);
  }, [userId]);
  useEffect(() => {
    // console.log(userPw);
  }, [userPw]);
  useEffect(() => {
    // console.log(userName);
  }, [userName]);

  async function getSignup() {
    const accept = await dispatch(signAction(userId, userPw, userName));
    if (!accept) {
      alert("이미 사용중인 아이디 입니다.");
    } else {
      alert("가입 완료");
      nav("/");
    }
  }

  return (
    <div>
      <SignWrap>
        <div className="container">
          <Header page={"Sign"} />
          {/* signup Wrap */}
          <label>ID</label>
          <input onChange={(e) => setUserId(e.target.value)}></input>

          <label>PW</label>
          <input
            type="password"
            onChange={(e) => setUserPw(e.target.value)}
          ></input>

          <label>NAME</label>
          <input onChange={(e) => setUserName(e.target.value)}></input>
          <button onClick={getSignup}>SignUp</button>
          {/*  */}
        </div>
      </SignWrap>
    </div>
  );
};

export default Sign;
