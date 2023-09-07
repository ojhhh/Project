import React, { useState, useEffect } from "react";
import { Container } from "./PostList.styled";
import CardComponent from "../../components/layout/card";
// import Button from "react-bootstrap/Button";
import Masonry from "react-masonry-css";
import Nav from "../NavPage/Nav";
import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useLocation } from "react-router-dom";

// hashtag start
import { HashTagDiv, AllPostButton, InsertButton } from "./PostList.styled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// hashtag end

const PROXY = process.env.REACT_APP_PROXY;

const fetchPost = async () => {
  const { data } = await axios.get(`${PROXY}/post/posts`);

  return data;
};

function PostList() {
  const location = useLocation();
  const queryClient = useQueryClient();

  // hashtag start
  const user_info = useSelector((state) => state.mypage.data);
  const navigator = useNavigate();
  const [hashtag, setHashtag] = useState([]);
  const [selectTag, setSelectTag] = useState(null);
  // hashtag end

  const {
    data: posts,
    isError,
    isLoading,
    error,
    refetch,
  } = useQuery("posts", fetchPost, {
    onSuccess: (post) => {
      const allTags = post.reduce((acc, postValue) => {
        if (postValue.hash_tag !== "[]") {
          const tmp = JSON.parse(postValue.hash_tag);
          return [...acc, ...tmp];
        }
        return acc;
      }, []);

      setHashtag((hashtags) => {
        const changeValue = hashtags.map((tagObj) => Object.keys(tagObj)[0]);
        const mergeTag = [...changeValue, ...allTags];

        const tagCount = mergeTag.reduce((acc, tag) => {
          acc[tag] = (acc[tag] || 0) + 1;
          return acc;
        }, {});

        const result = Object.entries(tagCount).map(([key, value]) => ({
          [key]: value,
        }));
        return result;
      });
    },
  });

  // 해시태그를 누르면 해당 해시태그를 포함한 글만 가져옴
  const handleHashtag = (tag) => {
    setSelectTag(tag);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    // 특정 쿼리를 무효화하고 다시 가져오도록 함 "invalidateQueries"
    queryClient.invalidateQueries("posts");
  }, [location, queryClient]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  // 해시태그가 많은 순서대로 정렬
  const sortHashag = hashtag.sort((a, b) => {
    const aValue = Object.values(a)[0];
    const bValue = Object.values(b)[0];
    return bValue - aValue;
  });

  // 게시글 전체 보기
  const handleAllPost = () => {
    setSelectTag(null);
  };

  // 글쓰기
  const handleInsert = () => {
    navigator("/postinsert");
  };

  // 해당 해시태그가 포함된 게시글을 찾음
  const postFilter = selectTag
    ? posts.filter((post) => JSON.parse(post.hash_tag).includes(selectTag))
    : posts;

  // console.log("hashtag : ", hashtag);

  return (
    <>
      <Container>
        <Nav />
        {/* hashtag start */}
        <HashTagDiv>
          <AllPostButton>
            <div className="AllPostWrap" onClick={handleAllPost}>
              <div className="AllPostImg">
                <img src="apparel.jpg" alt="" />
              </div>
              <div className="AllPostBox">
                <div className="AllPostTxt">
                  <span>전체보기</span>
                </div>
              </div>
            </div>
          </AllPostButton>
          {sortHashag.slice(0, 8).map((e, index) => (
            <div className="hashtagCard" key={index}>
              <div
                className="hashtagWrap"
                onClick={() => handleHashtag(Object.keys(e)[0])}
              >
                <div className="hashtagImg">
                  <img src={"/hashtag/" + Object.keys(e)[0] + ".jpg"} alt="" />
                </div>
                <div className="hashtagBox">
                  <div className="hashtagTxt">
                    <span>{`#` + Object.keys(e)[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* hashtag end */}
          {/* insertbutton start */}
          {user_info?.id ? (
            <InsertButton>
              <div className="InsertWrap" onClick={handleInsert}>
                <div className="InsertImg">
                  <img src="add.png" alt="" />
                </div>
                <div className="InsertBox">
                  <div className="InsertTxt">
                    <span>글쓰기</span>
                  </div>
                </div>
              </div>
            </InsertButton>
          ) : null}
        </HashTagDiv>
        {/* insertbutton end */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {postFilter.map((post) => (
            <CardComponent post={post} key={post.id} />
          ))}
        </Masonry>
      </Container>
    </>
  );
}

export default PostList;
