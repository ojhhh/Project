import React, { useState } from "react";
import axios from "axios";
import { Comment_Box } from "../../../page/POSTDETAILpage/PostDetail.styled";

const Comments = ({ commentsList, handleCommentSubmit }) => {
  const [addComments, setAddComments] = useState("");

  return (
    <Comment_Box>
      {commentsList &&
        commentsList.map((value, index) => (
          <li key={index} className="comment_content">
            {value.comments_content}
          </li>
        ))}
      <input onChange={(e) => setAddComments(e.target.value)} />
      <button onClick={() => handleCommentSubmit(addComments)}>입력</button>
    </Comment_Box>
  );
};

export default Comments;
