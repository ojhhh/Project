import React from "react";
import {
  StyledLikeIconWrapper,
  LikeIcon,
} from "../../../page/POSTDETAILpage/PostDetail.styled";

const LikeButton = ({ isLiked, handleLike, likes }) => (
  <StyledLikeIconWrapper aria-label="좋아요" role="button" onClick={handleLike}>
    <LikeIcon liked={isLiked} width="30px" />
    <div className="like_count">
      좋아요 <strong>{likes}</strong>개
    </div>
  </StyledLikeIconWrapper>
);

export default LikeButton;
