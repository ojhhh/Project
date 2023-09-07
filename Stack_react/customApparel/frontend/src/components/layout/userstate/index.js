import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  UserStateBox,
  ProfileImageBox,
  StyledProfileImage,
  ProfileInfo,
  StyledUserName,
  StyledUploadTime,
  StyleButton,
} from "./styled";
import axios from "axios";

const PROXY = process.env.REACT_APP_PROXY;

const UserState = ({ user_info }) => {
  const navigate = useNavigate();
  const getUrl = useLocation().pathname.split("/")[1];
  // console.log("getUrl :", getUrl);

  const userInfo = user_info.USER;
  const postInfo = user_info;

  const user_id = useSelector((state) => state.mypage.data)?.id;

  // 게시글 수정
  const handleUpdate = () => {
    navigate(`/update/${postInfo.id}`, {
      state: {
        user_info,
      },
    });
  };

  // 게시글 삭제
  const handleDelete = async () => {
    try {
      if (window.confirm("정말로 삭제 하시겠습니까?")) {
        const data = await axios.post(
          `${PROXY}/post/deletepost`,
          { id: postInfo.id },
          { withCredetials: true }
        );

        await navigate("/");
      } else return;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserStateBox>
      <ProfileImageBox>
        {/* <ProfileImageBox href={`/social/users/@${userInfo.user_id}`}> */}
        <StyledProfileImage
          src={`${PROXY}` + userInfo.profile_img}
          alt="프로필 이미지"
        />
        <ProfileInfo>
          {/* <ProfileInfo href={`/social/users/@${userInfo.user_id}`}> */}
          <StyledUserName>{userInfo.user_id}</StyledUserName>
          <StyledUploadTime>{postInfo.createdAt}</StyledUploadTime>
        </ProfileInfo>
      </ProfileImageBox>
      {getUrl == "update" ? (
        <div>
          <StyleButton onClick={handleDelete}>삭제</StyleButton>
        </div>
      ) : postInfo.callbyuser_id == user_id ? (
        <div>
          <StyleButton onClick={handleUpdate}>수정</StyleButton>
          <StyleButton onClick={handleDelete}>삭제</StyleButton>
        </div>
      ) : null}
    </UserStateBox>
  );
};

export default UserState;
