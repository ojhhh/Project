import React, { useState } from "react";
import { PostDetailWrap } from "./PostDetail.styled";
import { Header } from "../../layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postAction } from "../../../middleware";

const PostDetail = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const getPostId = useParams();
  const getPost = useSelector((state) =>
    state.posts.allPost.find((e) => e.id == getPostId.id)
  );

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function postUpdate() {
    const data = { id: getPostId.id, title, content };
    dispatch(postAction.postUpdate(data));
    nav("/posts");
  }

  return (
    <div>
      <PostDetailWrap>
        <div className="container">
          <Header page={"Post Detail"} />
          <div className="PostTitle">
            <label>title : </label>
            <input
              placeholder={getPost.title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>content : </label>
            <input
              placeholder={getPost.content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={postUpdate}>update</button>
          </div>
        </div>
      </PostDetailWrap>
    </div>
  );
};

export default PostDetail;
