import React, { useEffect } from "react";
import { PostInsertWrap } from "./PostInsert.styled";
import { Header } from "../../layout";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../../../middleware";
import { useNavigate } from "react-router-dom";

const PostInsert = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const userId = useSelector((state) => state.logins.id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    // console.log(title);
  }, [title]);
  useEffect(() => {
    // console.log(content);
  }, [content]);

  function insertPost() {
    dispatch(postAction.postInsert(title, content, userId));
    nav("/posts");
  }

  return (
    <div>
      <PostInsertWrap>
        <div className="container">
          <Header page={"Post Insert"} />
          <div className="PostTitle">
            <label>title : </label>
            <input name="title" onChange={(e) => setTitle(e.target.value)} />
            <label>content : </label>
            <input
              name="content"
              onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={insertPost}>insert</button>
          </div>
        </div>
      </PostInsertWrap>
    </div>
  );
};

export default PostInsert;
