import React from "react";
import { Container } from "./PostList.styled";
import CardComponent from "../../components/layout/card";
// import Button from "react-bootstrap/Button";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";

function PostListNoUsequery(value) {
  // console.log(value);
  const posts = value.value;
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Container>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {posts.map((post) => (
            <Link
              to={`/posts/${post.id}`}
              // state={{ post: post }}
              key={post.user_id}
            >
              <CardComponent post={post}></CardComponent>
            </Link>
          ))}
        </Masonry>
      </Container>
    </>
  );
}

export default PostListNoUsequery;
