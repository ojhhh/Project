import React, { useEffect, useState } from "react";
import Nav from "../NavPage/Nav";
import UserState from "../../components/layout/userstate";
import ImageBox from "../../components/layout/imagebox";
import {
  ContentWrapper,
  StyledLikeIconWrapper,
  ContentBox,
  CountContainer,
  Viewdiv,
  Text,
  Text_Span,
  Comment_Box,
  More,
} from "./PostDetail.styled";
import axios from "axios";
import { LikeIcon } from "../../components/layout/userbox";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { StyledImage } from "../../components/layout/userbox/styled";
import {
  CommentContent,
  CommentInput,
  CommentInputContainer,
  CommentSubmitButton,
  InputContainer,
  PostDetailCommentInput,
  Recommentbutton,
  SubmitButton,
} from "../../components/layout/imagebox/styled";

const PROXY = process.env.REACT_APP_PROXY;

const PostDetail = () => {
  const navigate = useNavigate();

  const fetchPost = async (postId) => {
    const { data } = await axios.get(`${PROXY}/post/detail/${postId}`, {
      params: { id: postId },
      withCredential: true,
    });
    // console.log("data??", data);
    return data;
  };

  const fetchComments = async (postId) => {
    const { data } = await axios.get(`${PROXY}/comment/comments/${postId}`);
    return data.comments;
  };
  const fetchReComments = async (commentId) => {
    const { data } = await axios.get(
      `${PROXY}/comment/recomments/${commentId}`
    );
    return data.recomments;
  };

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태를 추적하기 위한 state
  const [addComments, setAddComments] = useState(""); // 댓글
  const [recommentInput, setRecommentInput] = useState({}); // 대댓글

  const [expanded, setExpanded] = useState(false);
  const user_info = useSelector((state) => state.mypage.data);
  // console.log("user_info", user_info);
  const { postId } = useParams(); // URL로부터 postId 가져오기
  const {
    data: postdata,
    isLoading,
    refetch,
  } = useQuery(["postDetail", postId], () => fetchPost(postId), {
    onSuccess: (e) => {
      setCommentsList(e?.COMMENTs ? e.COMMENTs : "");

      if (e?.likes) setLikes(JSON.parse(e?.likes).length);
    },
  });

  useEffect(() => {
    if (!user_info || !postdata || postdata.likes?.length == 0) return;
    let likesData = JSON.parse(postdata.likes);
    // console.log("postdata.likes", likesData);

    // console.log("user_info :", user_info);
    const likeUser = likesData?.find((value) => value == user_info.id);

    if (likeUser) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [postdata, user_info]);

  const handleLike = async () => {
    try {
      if (isLoading) {
        return;
      }

      let likesData = postdata.likes ? JSON.parse(postdata.likes) : [];
      let updatedLikesData;
      const likeUserIndex = likesData.findIndex(
        (value) => value === user_info.id
      );
      // console.log(likeUserIndex);

      if (likeUserIndex !== -1) {
        // 이미 좋아요한 경우, 좋아요 취소 처리
        updatedLikesData = likesData.filter((value) => value !== user_info.id);
      } else {
        // 좋아요하지 않은 경우, 좋아요 추가 처리
        updatedLikesData = [...likesData, user_info.id];
      }

      // console.log(updatedLikesData);

      let url = `${PROXY}/post/postLikes/`;
      let action = likeUserIndex !== -1 ? "unlike" : "like";

      const response = await axios.post(url, {
        action: action,
        user_id: user_info.id,
        post_id: postId,
        post_title: postdata.post_title,
        post_content: postdata.post_content,
        likes: JSON.stringify(updatedLikesData),
      });
      if (user_info == "다시 로그인해주세요") {
        alert("로그인해야 좋아요 누를수있음");
        return navigate("/login");
      }
      if (response.data.success) {
        // console.log("여기까진 오니?");
        setIsLiked(!isLiked); // 토글 상태 변경
        setLikes(updatedLikesData.length); // 좋아요 수 업데이트
        refetch();
      }
    } catch (error) {
      console.error("Failed to toggle like", error);
    }
  };

  // 댓글추가
  const handleCommentSubmit = async () => {
    if (user_info == "다시 로그인해주세요") {
      console.log("gg");
      alert("로그인 해주세요");
      return navigate("/login");
    } else {
      try {
        const response = await axios.post(`${PROXY}/comment/comments/`, {
          user_id: user_info.user_id,
          profile_img: user_info.profile_img,
          addComments,
          postId,
        });
        if (response.data.success) {
          const updatedComments = await fetchComments(postId);

          // 기존댓글 + 대댓글 + 새댓글 합침
          const commetsWithRecomments = updatedComments.map((comment) => ({
            ...comment,
            RECOMMENTs:
              commentsList.find((c) => c.id === comment.id)?.RECOMMENTs || [],
          }));
          setCommentsList(commetsWithRecomments);
          setAddComments(""); // 댓글 입력 창 비우기
        }
      } catch (error) {
        console.log("댓글 추가 실패", error);
      }
    }
  };
  // 댓글 목록을 저장하는 상태
  const [commentsList, setCommentsList] = useState([]);
  // console.log("user_id :", commentsList.user_id);
  // console.log("profile_img :", commentsList);

  // 총 댓글 count
  const totalComments = commentsList.reduce((acc, comment) => {
    return acc + 1 + (comment.RECOMMENTs ? comment.RECOMMENTs.length : 0);
  }, 0);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 대댓글 입력창 토글하는 함수
  const toggleRecommentInput = (commentId) => {
    setRecommentInput((prevInput) => ({
      ...prevInput,
      [commentId]: !prevInput[commentId],
    }));
  };

  // 대댓글 추가 함수
  const handleRecommentSubmit = async (commentId) => {
    if (user_info == "다시 로그인해주세요") {
      alert("로그인 해주세요");
      return navigate("/login");
    } else {
      try {
        const response = await axios.post(`${PROXY}/comment/recomments/`, {
          user_id: user_info.user_id,
          profile_img: user_info.profile_img,
          recomments: recommentInput[commentId],
          recomment_id: commentId, // 댓글id 넣기
          // postId,
        });
        if (user_info == "다시 로그인해주세요") {
          alert("로그인해야 대댓글 달 수 있음");
          return navigate("/login");
          // navigate 훅에 state 내장기능이 있고 여기에 from 이라는 props 값을 전달해준다
          // pathname : 웹브라우저의 window.location 객체의 속성중 하나임 / 현재 창의 URL 에 대한 정보를 포함함
        }
        if (response.data.success) {
          // console.log("commentId :", commentId);
          const updatedComments = await fetchReComments(commentId);
          setCommentsList((prevComments) =>
            prevComments.map((comment) =>
              comment.id === commentId
                ? { ...comment, RECOMMENTs: updatedComments }
                : comment
            )
          );
          setRecommentInput((prevInput) => ({
            ...prevInput,
            [commentId]: "",
          }));
          toggleRecommentInput(commentId); // 대댓글 입력창 닫기
        }
      } catch (error) {
        console.log("대댓글 추가 실패", error);
      }
    }
  };

  // postdata 의 callbyuser_id 가
  return (
    <>
      <Nav />
      <ContentWrapper>
        {/* {isLoading ? <UserState user_info={user_info} /> : null} */}
        {/* 글쓴이 정보 전달해주기 */}
        <UserState user_info={postdata} />
        <ImageBox img={postdata.post_img} />
        <ContentBox>
          <StyledLikeIconWrapper
            aria-label="좋아요"
            role="button"
            onClick={handleLike}
          >
            <LikeIcon liked={isLiked} width="30px" />
          </StyledLikeIconWrapper>
          <CountContainer>
            <div className="like_count">
              좋아요 <strong>{likes}</strong>개
            </div>
          </CountContainer>
          <Text
            expanded={expanded}
            onClick={() =>
              postdata.post_content.length > 10 &&
              !expanded &&
              setExpanded(true)
            }
          >
            <Text_Span expanded={expanded}>
              {postdata.post_content.slice(
                0,
                expanded ? postdata.post_content.length : 10
              )}
            </Text_Span>
            {postdata.post_content.length > 10 && !expanded && (
              <More>더보기</More>
            )}
          </Text>
          <Comment_Box>
            <Viewdiv className="comment_count">
              댓글 <strong>{totalComments}</strong>개
            </Viewdiv>

            {commentsList && commentsList.length > 0 ? (
              commentsList.map((comment) => (
                <div key={comment.id}>
                  <div className="comment_content">
                    <StyledImage
                      src={`${PROXY}` + comment.profile_img}
                      alt="user profile"
                    />{" "}
                    <span>{comment.user_id}</span> {/* 유저 ID */}
                    <CommentContent>{comment.comments_content}</CommentContent>
                  </div>
                  <Recommentbutton
                    onClick={() => toggleRecommentInput(comment.id)}
                  >
                    답글 달기
                  </Recommentbutton>
                  {/* test */}
                  {recommentInput[comment.id] && (
                    <InputContainer>
                      <PostDetailCommentInput
                        onChange={(e) =>
                          setRecommentInput({
                            ...recommentInput,
                            [comment.id]: e.target.value,
                          })
                        }
                      />
                      <SubmitButton
                        onClick={() => handleRecommentSubmit(comment.id)}
                      >
                        등록
                      </SubmitButton>
                    </InputContainer>
                  )}

                  {comment.RECOMMENTs &&
                    comment.RECOMMENTs.length > 0 &&
                    comment.RECOMMENTs.map((recomment) => (
                      <div
                        key={recomment.id}
                        className="recomment_content"
                        style={{ marginLeft: "20px" }}
                      >
                        <StyledImage
                          src={`${PROXY}` + recomment.profile_img}
                          alt="User profile img from recomment"
                        />
                        <span>{recomment.user_id}</span>
                        <CommentContent>{recomment.recomments}</CommentContent>
                      </div>
                    ))}
                </div>
              ))
            ) : (
              <div>댓글이 없습니다.</div>
            )}
            {/* 댓글 입력 영역 test */}
            <CommentInputContainer>
              <CommentInput onChange={(e) => setAddComments(e.target.value)} />
              <CommentSubmitButton onClick={handleCommentSubmit}>
                입력
              </CommentSubmitButton>
            </CommentInputContainer>
            {/* <input onChange={(e) => setAddComments(e.target.value)} />
            <button onClick={handleCommentSubmit}>입력</button> */}
          </Comment_Box>
        </ContentBox>
      </ContentWrapper>
    </>
  );
};

export default PostDetail;
