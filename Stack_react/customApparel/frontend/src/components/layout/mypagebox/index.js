import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getmypageinfo,
  updateuserpw,
  updateusernick,
  imgUpdate,
  postWrittenbyme,
  getmypostsIliked,
} from "../../../features/mypageslice";
import { MypageMainWrap, Mainwrapper } from "./Mypage.styled";
import PostIliked from "./PostIliked";
import PostWrittenbyme from "./PostWrittenbyme";
const PROXY = process.env.REACT_APP_PROXY;

export const Mypage = () => {
  const dispatch = useDispatch();
  const image2 = useSelector((state) => state.mypage.data);
  const [Image, setImage] = useState("");
  const [user_id, setuser_id] = useState("");
  const [user_accept, setuser_accept] = useState(0);
  const [Nick, setNickname] = useState("");
  const [formData, setFormData] = useState(new FormData());

  const [updateNick, setNick] = useState("");
  const [user_pw, setUser_pw] = useState("");
  const handleNickInput = (e) => {
    // console.log(e.target.value);
    setNick(e.target.value);
  };
  const handlePwInput = (e) => {
    // console.log(e.target.value);
    setUser_pw(e.target.value);
  };
  const handlepwsubmit = () => {
    // console.log(user_pw);
    dispatch(updateuserpw(user_pw));
  };
  const handleNicksubmit = () => {
    // console.log(updateNick);
    dispatch(updateusernick(updateNick));
  };

  useEffect(() => {
    // getmypageinfo 액션을 디스패치하고, 반환 함수를 사용하여 data 변수를 업데이트
    const fetchData = async () => {
      const data = await dispatch(getmypageinfo());
      // console.log(data);

      setImage(`${PROXY}${data.payload.profile_img}`);
      setuser_id(data.payload.user_id);
      setuser_accept(data.payload.Accept);
      setNickname(data.payload.Nick);
      // const post = await dispatch(getmypostsIliked());
    };
    fetchData();
  }, [dispatch]);

  const [File, setFile] = useState();
  const fileInput = useRef(null);
  const onChange = (e) => {
    if (e.target.files[0]) {
      // console.log("asdasdasd", e.target.files[0]);
      formData.append("profile_img", e.target.files[0]);
      setFormData(formData);
      // console.log("asdasd", formData);
      //화면에 프로필 사진 표시
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      dispatch(imgUpdate(formData));
    } else {
      //업로드 취소할 시
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
    }
  };

  return (
    <MypageMainWrap>
      <h1>회원정보수정</h1>
      <Mainwrapper>
        <div className="flexbox">
          <div className="leftbluebigbox">
            <span className="maintitle">프로필</span>
          </div>
          <div className="rightbigbox">
            {" "}
            <img
              src={Image}
              style={{ width: "500px", margin: "20px" }}
              size={200}
              onClick={() => {
                fileInput.current.click();
              }}
            ></img>{" "}
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/jpg,impge/png,image/jpeg"
              name="profile_img"
              onChange={onChange}
              ref={fileInput}
            />
          </div>
        </div>
        <div className="flexbox">
          <div className="leftbluebox">
            {" "}
            <span className="maintitle">아이디</span>
          </div>
          <div className="rightbox">{user_id}</div>
        </div>
        <div className="flexbox">
          <div className="leftbluebox">
            {" "}
            <span className="maintitle">닉네임</span>
          </div>
          <div className="rightbox">
            {Nick}
            <input onChange={handleNickInput} placeholder="닉네임 변경"></input>
            <button
              onClick={() => {
                handleNicksubmit();
              }}
            >
              닉네임 변경
            </button>
          </div>
        </div>
        <div className="flexbox">
          <div className="leftbluebox">
            {" "}
            <span className="maintitle">유저등급</span>
          </div>
          <div className="rightbox">{user_accept}</div>
        </div>
        <div className="flexbox">
          <div className="leftbluebox">
            {" "}
            <span className="maintitle">비밀번호</span>
          </div>
          <div className="rightbox">
            <input onChange={handlePwInput} placeholder="비밀번호 변경"></input>
            <button
              onClick={() => {
                handlepwsubmit();
              }}
            >
              비밀번호 변경
            </button>
          </div>
        </div>
      </Mainwrapper>
      <PostWrittenbyme />
      {/* <PostIliked /> */}
    </MypageMainWrap>
    // <div>
    //   <span>아이디:{user_id}</span>
    //   <img
    //     src={Image}
    //     style={{ width: "500px", margin: "20px" }}
    //     size={200}
    //     onClick={() => {
    //       fileInput.current.click();
    //     }}
    //   ></img>
    //   <input
    //     type="file"
    //     style={{ display: "none" }}
    //     accept="image/jpg,impge/png,image/jpeg"
    //     name="profile_img"
    //     onChange={onChange}
    //     ref={fileInput}
    //   />
    // </div>
  );
};
