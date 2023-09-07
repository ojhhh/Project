import styled from "styled-components";

export const ImageContainer = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
`;

export const ImagePreview = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;

  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* width: 100%; */
    height: 100%;
  }
`;

export const Recommentbutton = styled.button`
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  background-color: transparent;
`;

export const CommentContent = styled.p`
  margin-bottom: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PostDetailCommentInput = styled.input`
  border-radius: 20px;
  font-size: 14px;
  letter-spacing: -0.21px;
  line-height: 1.2142857143;
  padding: 11px 52px 11px 12px;
  flex: 1;
  word-break: break-all;
  border: 1px solid #ebebeb;
`;

export const SubmitButton = styled.button`
  border-radius: 20px;
  font-size: 14px;
  letter-spacing: -0.21px;
  line-height: 1.2142857143;
  padding: 11px 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;
// Comment css
export const CommentInputContainer = styled(InputContainer)`
  margin: 10px 0 0 0;
`;

export const CommentInput = styled(PostDetailCommentInput)`
  /* border-color: #ebebeb; */
`;

export const CommentSubmitButton = styled(SubmitButton)``;
