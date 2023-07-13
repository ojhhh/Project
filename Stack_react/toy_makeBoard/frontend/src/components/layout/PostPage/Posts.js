import React, { useState, useEffect } from "react";
import { PostWrap, PostsMainWrap } from "./Posts.styled";
import { Header } from "../../layout";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../../../middleware";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const allPost = useSelector((state) => state.posts.allPost);
  const userChk = useSelector((state) => state.logins.id);
  const postChk = useSelector((state) => state.posts.cnt);
  useEffect(() => {}, []);
  useEffect(() => {
    // console.log(allPost);
  }, [allPost]);
  useEffect(() => {
    // console.log(userChk);
  }, [userChk]);
  useEffect(() => {
    dispatch(postAction.postSelect());
  }, [postChk]);

  function postInsert() {
    nav("/insert");
  }
  function postDetail(id) {
    // console.log(id);
    nav(`/detail/${id}`);
  }
  function postDelete(id) {
    dispatch(postAction.postDelete(id));
  }

  return (
    <div>
      <PostWrap>
        <div className="container">
          <Header page={"Posts"} />
          {/* PostsMainWrap */}
          <PostsMainWrap>
            <div className="titleBox">
              <div className="title">title</div>
              <div className="content">content</div>
              <div className="writer">writer</div>
              <div className="btnBox">
                <button onClick={postInsert}>INSERT</button>
              </div>
            </div>
            {allPost ? (
              <>
                {allPost.map((e) => {
                  return (
                    <div className="titleBox">
                      <div className="title">{e.title}</div>
                      <div className="content">{e.content}</div>
                      <div className="writer">{e.writer}</div>
                      <div className="btnBox">
                        {userChk == e.writer ? (
                          <>
                            <button
                              className={e.id}
                              onClick={() => postDetail(e.id)}
                            >
                              UPDATE
                            </button>
                            <button
                              className={e.id}
                              onClick={() => postDelete(e.id)}
                            >
                              DELETE
                            </button>
                          </>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}
          </PostsMainWrap>
        </div>
      </PostWrap>
    </div>
  );
};

export default Posts;
