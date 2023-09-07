import styled from "styled-components";

export const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #e6e6e6;
  background-color: #ffffff;
`;

export const ContentBox = styled.div`
  margin-top: 20px;
  border: 1px solid #dbdbdb;
`;

export const Textarea = styled.textarea`
  margin: 10px 0 0 0;
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  outline: none;
  resize: none;
  padding: 10px 0 0 0;
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;
  display: block;
  ${({ expanded }) => !expanded && "max-height: 80px;"}
  ${({ expanded }) => expanded && "height: auto;"}
`;

export const ImageInput = styled.input`
  display: block;
  margin-top: 10px;
`;

export const TagInput = styled.input`
  width: 100%;
  border: 1px solid #dbdbdb;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  /* border-radius: 20px; */
  font-size: 14px;
  letter-spacing: -0.21px;
  line-height: 1.2142857143;
  padding: 11px 52px 11px 12px;
  flex: 1;
  word-break: break-all;
  border: 1px solid #ebebeb;
`;

export const TagButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  /* background-color: #e6e6e6; */
  cursor: pointer;
  margin-left: 5px;

  border-radius: 20px;
  font-size: 14px;
  letter-spacing: -0.21px;
  line-height: 1.2142857143;
  padding: 11px 20px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  border: 2px solid rgba(44, 34, 34, 0.5);
  border-radius: 5px;
  outline: none;
  font-weight: 700;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  background-color: transparent;

  &:hover {
    background-color: rgba(34, 34, 34, 0.5);
    color: white;
  }
`;

export const AutoCompleteButton = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  border: 1px solid #dbdbdb;
  cursor: pointer;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 5px;
`;

export const Tag = styled.div`
  padding: 5px 10px;
  background-color: #e6e6e6;
  cursor: pointer;
`;

export const DivBox = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  border: "1px solid #dbdbdb";
`;

export const PreImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;

export const Deletebutton = styled.button`
  margin: 0 0 0 5px;
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  background-color: transparent;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;
