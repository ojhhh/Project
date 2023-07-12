import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SignWrap } from "./Sign.styled";
import { Header } from "../../layout";
import { signups } from "../../../middleware";
import axios from "axios";

const Sign = () => {
  const dispatch = useDispatch();
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

  function getSignup() {
    dispatch(signups(userId, userPw, userName));
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
