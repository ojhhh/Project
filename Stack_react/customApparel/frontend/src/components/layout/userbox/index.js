import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  UserBoxContainer,
  StyledLikeIconWrapper,
  StyledImage,
  StyledUsername,
} from "./styled";
const PROXY = process.env.REACT_APP_PROXY;

export const LikeIcon = ({ liked, width = "20px" }) => {
  const style = {
    fill: liked ? "red" : "none", // 좋아요가 눌렸다면 빨간색으로, 아니면 아무 색도 채우지 않음
    stroke: !liked ? "black" : "none", // 좋아요가 눌리지 않았다면 검은색 테두리로, 눌렸다면 테두리 없음
    strokeWidth: 1, // 테두리의 두께는 2px
    width,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon sprite-icons ico-social-like-m-off"
      viewBox="0 0 24 24"
      style={style}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

function UserBox({ post, userImg, userID }) {
  const navigate = useNavigate();
  // 좋아요 get 가져와서 똑같이 연결해주기
  const user_info = useSelector((state) => state.mypage.data);

  const [likes, setLikes] = useState(JSON.parse(post.likes).length || 0);
  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태를 추적하기 위한 state
  const [profileImg, setProfileImg] = useState(post.USER.profile_img);

  const likesData = post.likes ? JSON.parse(post.likes) : [];

  let updatedLikesData;

  // findIndex : true 면 (0) false 면 (-1)
  let likeUserIndex;
  useEffect(() => {
    likeUserIndex = likesData.findIndex((value) => value === user_info?.id);
    if (likeUserIndex == 0) {
      setIsLiked(true);
    }
    // console.log("likeUserIndex :", likeUserIndex);
  }, [user_info]);

  const handleLike = async (e) => {
    if (user_info == "다시 로그인해주세요") {
      alert("로그인해야 좋아요 누를수있음");
      return navigate("/login");
    }

    setIsLiked(!isLiked); // 좋아요 상태 토글
    if (isLiked) {
      setLikes(likes - 1); // 좋아요 취소 시, 숫자 감소
      // 좋아요 취소하면 배열에서 내 아이디 filter 처리
      updatedLikesData = likesData.filter((value) => value !== user_info.id);
      // console.log("updatedLikesData: 좋아요 취소", updatedLikesData);

      // 유저 고유 아이디, 포스트 아이디, like 배열 보내기
    } else {
      setLikes(likes + 1); // 좋아요 시, 숫자 증가
      updatedLikesData = [...likesData, user_info.id];
      // console.log("updatedLikesData: 좋아요", updatedLikesData);
    }

    let url = `${PROXY}/post/postLikes/`;
    let action = likeUserIndex !== -1 ? "unlike" : "like";
    const response = await axios.post(url, {
      action,
      user_id: user_info.id,
      post_id: post.id,
      post_title: "title",
      post_content: post.post_content,
      likes: JSON.stringify(updatedLikesData),
    });
  };

  // console.log("post : ", post);

  return (
    <UserBoxContainer>
      <StyledImage src={`${PROXY}` + profileImg} roundedCircle />
      <StyledUsername>{userID}</StyledUsername>
      <StyledLikeIconWrapper
        aria-label="좋아요"
        role="button"
        onClick={handleLike}
      >
        <LikeIcon liked={isLiked} />
        <span className="like_count">{likes}</span>
      </StyledLikeIconWrapper>
    </UserBoxContainer>
  );
}

export default UserBox;
