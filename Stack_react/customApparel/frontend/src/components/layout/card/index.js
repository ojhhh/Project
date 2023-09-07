import React from "react";
import { Card } from "react-bootstrap";
import UserBox from "../userbox";
import Content from "../content";
import { Link } from "react-router-dom";

const PROXY = process.env.REACT_APP_PROXY;

function CardComponent({ post }) {
  return (
    <Card style={{ border: "none" }} className="mb-4">
      <Link to={`/posts/${post.id}`} state={{ post: post }} key={post.user_id}>
        <Card.Img
          style={{ borderRadius: "20px" }}
          className="img_radius"
          variant="top"
          src={`${PROXY}` + post.post_img}
        />
      </Link>
      <Card.Body>
        <UserBox post={post} userID={post.user_id} />
        <Content post={post} />
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
