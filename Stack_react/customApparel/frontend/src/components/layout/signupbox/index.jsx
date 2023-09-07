import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserinfo } from "../../../features/mainslice";
import {
  SignboxWrapper,
  Container,
  Inner,
  Content,
  Join_form,
  Form_content,
  Form_section,
  Form_list,
  Formitem,
} from "./Sign.styled";
import { useNavigate } from "react-router-dom";
import { Navdiv, NavLink } from "../../../page/NavPage/Nav.styled";

const PROXY = process.env.REACT_APP_PROXY;

const Sign = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Nick, setNick] = useState("");
  const [user_id, setUser_id] = useState("");
  const [user_pw, setUser_pw] = useState("");
  const [profile_img, setImageFile] = useState(null);
  const [formData, setFormData] = useState(new FormData());
  // console.log("안녕");

  const handleIdInput = (e) => {
    // console.log(e.target.value);

    setUser_id(e.target.value);
  };
  const handlePwInput = (e) => {
    // console.log(e.target.value);
    setUser_pw(e.target.value);
  };
  const handleNickInput = (e) => {
    // console.log(e.target.value);
    setNick(e.target.value);
  };

  useEffect(() => {
    // console.log("profile_img:", profile_img);
  }, [profile_img]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    // console.log(file);
    setImageFile(file);
  };
  const handleSubmit = async () => {
    // Create formData here
    const form = {
      Nick: Nick,
      user_id: user_id,
      user_pw: user_pw,
    };
    formData.append("data", JSON.stringify(form));

    formData.append("profile_img", profile_img);
    // for (let value of formData.values()) {
    //   console.log(value);
    // }
    setFormData(formData);
    // console.log("handleSubmit 작동함");
    const tmp = await dispatch(setUserinfo(formData));

    // console.log(tmp);
    setFormData(new FormData());
    try {
      if (tmp.payload == undefined) {
        alert("오류가발생했습니다");
      } else if (
        tmp.payload.data == "중복된 유저가 있어 가입을 방지했습니다."
      ) {
        alert("중복된 유저가 있어 가입을 방지했습니다.");
      } else if (tmp.payload.data.message == "가입에 성공하셨습니다.") {
        alert("가입신청이 완료되었습니다 승인을 기다려주십시오.");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }

    // alert("가입신청이 완료되었습니다 승인을 기다려주십시오.");
  };
  return (
    <SignboxWrapper>
      <Container>
        <Inner>
          <Content>
            <Navdiv>
              <NavLink className="logo2" to={"/"}>
                CUSTOMAPPAREL
              </NavLink>
            </Navdiv>
            <Join_form>
              <Form_content>
                <Form_section>
                  <Form_list>
                    <div className="logo">logotest</div>
                    <Formitem>
                      <div className="uesr"></div>
                      {/* <label htmlFor="Nick">이름</label> */}
                      <input onChange={handleNickInput} placeholder="닉네임" />
                    </Formitem>
                    <Formitem>
                      <div className="uesrid"></div>
                      {/* <label htmlFor="user_id">아이디</label> */}
                      <input onChange={handleIdInput} placeholder="아이디" />
                    </Formitem>
                    <Formitem>
                      <div className="userpw"></div>
                      {/* <label htmlFor="user_pw">비밀번호</label> */}
                      <input
                        type="password"
                        onChange={handlePwInput}
                        placeholder="비밀번호"
                      />
                    </Formitem>
                    <Formitem>
                      <div className="profileimg"></div>

                      {/* <label htmlFor="profile_img">프로필 이미지</label> */}
                      <input
                        type="file"
                        id="profile_img"
                        onChange={handleImageChange}
                        accept="image/*"
                      />
                    </Formitem>
                    <div className="signupbutton">
                      <button
                        className="btn_submit"
                        onClick={handleSubmit}
                        id="uploadBtn"
                      >
                        회원가입
                      </button>
                    </div>
                  </Form_list>
                </Form_section>
              </Form_content>
            </Join_form>
          </Content>
        </Inner>
      </Container>
    </SignboxWrapper>
  );
};

export default Sign;
