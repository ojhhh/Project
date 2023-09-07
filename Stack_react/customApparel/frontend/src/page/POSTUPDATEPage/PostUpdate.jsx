import React, { useState, useEffect } from "react";
import { PostUpdateWrap, ProfileImage, Text } from "./PostUpdate.styled";
import Nav from "../NavPage/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import UserState from "../../components/layout/userstate";
import ImageBox from "../../components/layout/imagebox";
import { useSelector } from "react-redux";
import axios from "axios";

const PROXY = process.env.REACT_APP_PROXY;

const PostUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!location.state || !location.state.user_info) {
    alert("잘못된 접근입니다");
    setTimeout(navigate, 100, "/");
  }

  const { data } = useSelector((state) => state.mypage);
  const { user_info } = location.state || {};
  const postInfo = user_info || {};
  const [Image, setImage] = useState(postInfo.post_img);
  const [content, setContent] = useState();
  const [formData, setFormData] = useState(new FormData());
  const [imageFile, setImageFile] = useState();

  if (useLocation().state == null) return navigate("/");
  if (data === "다시 로그인해주세요") {
    alert("로그인 해주세요.");
    return navigate("/");
  }

  // 이미지 미리보기
  const handlePreview = (e) => {
    // console.log("e.target.files[0] : ", e.target.files[0].name);
    setImageFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // 수정완료 버튼
  const handleUpdate = async () => {
    const form = {
      id: postInfo.id,
      post_content: content,
    };

    formData.append("data", JSON.stringify(form));
    formData.append("post_img", imageFile);

    setFormData(formData);

    // formdata는 console.log를 찍으면 비어있는것 처럼 보이기 떄문에
    // for문을 돌려 확인해야함
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    const response = await axios.post(`${PROXY}/post/updatepost`, formData, {
      headers: {
        "Content-Type": "multipart/form-data; charset=utf-8",
      },
      withCredentials: true,
    });

    if (response.status === 200) {
      window.alert("수정 완료");
      await navigate("/photo");
    }
  };

  return (
    <div>
      <Nav />
      <PostUpdateWrap>
        {/*  */}
        <UserState user_info={postInfo} />
        {/*  */}
        <ImageBox img={Image} />
        <input
          type="file"
          accept="image/jpg,impge/png,image/jpeg"
          onChange={handlePreview}
        />
        {/*  */}
        <Text>
          <input
            type="text"
            placeholder={postInfo.post_content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleUpdate}>수정</button>
        </Text>
      </PostUpdateWrap>
    </div>
  );
};

export default PostUpdate;
