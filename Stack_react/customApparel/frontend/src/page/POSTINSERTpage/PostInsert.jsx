import React, { useEffect, useState, useRef } from "react";
import Nav from "../NavPage/Nav";
import {
  ContentWrapper,
  ContentBox,
} from "../POSTDETAILpage/PostDetail.styled";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  AutoCompleteButton,
  Deletebutton,
  Div,
  DivBox,
  ImageInput,
  PreImg,
  SubmitButton,
  Tag,
  TagButton,
  TagInput,
  TagList,
  Textarea,
} from "./PostInsert.styled";
import { InputContainer } from "../../components/layout/imagebox/styled";

const PROXY = process.env.REACT_APP_PROXY;

const PostInsert = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [post_img, setPost_img] = useState(null);
  const [PhotoformData, setPhotoFormData] = useState(new FormData());
  const user_info = useSelector((state) => state.mypage.data);
  // console.log(user_info);

  // 화면 그리기
  const [formData, setFormData] = useState({
    id: "",
    content: "",
    // author: { id: "123" },
    tags: [],
  });

  // X버튼 눌렀을때 태그 삭제
  const deleteTag = (tag) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
    });
  };
  // 자동완성 값이 있는 버튼을 눌렀을 때 이를 태그에 등록
  // 기존에 있던 태그 찾아서 등록
  const handleAutoCompletes = (autoComplete) => {
    const selectedTag = tags.find((tag) => tag === autoComplete);

    if (formData.tags.includes(selectedTag)) return;

    setFormData({
      ...formData,
      tags: [...formData.tags, selectedTag],
    });
    setTagInputValue("");
    setAutoCompletes([]);
  };

  // 추가 버튼 혹은 엔터 누르면 태그 생성
  // 포스트에 추가할 tag 리스트
  const addTag = (e) => {
    e.preventDefault();

    // 입력한 내용이 이미 등록된 태그면 그냥 등록 안됨
    if (formData.tags.find((tag) => tag === tagInputValue)) return;

    setFormData({
      ...formData,
      tags: [...formData.tags, tagInputValue],
    });

    setTagInputValue("");
    setAutoCompletes([]);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleImg = (e) => {
    // console.log("hi", e);
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };
  const onSubmit = async (e) => {
    // api 연결
    e.preventDefault(); // 기본동작 중단

    // const createdPost = new FormData();
    // createdPost.append("content", inputValue);
    // createdPost.append("id", formData.id);
    // PhotoformData.append("a", "a");
    // console.log("PhotoformData :", PhotoformData);
    // console.log("formData :", formData);
    const dhbb = {
      content: inputValue,
      id: user_info.id, // 아이디 넣어줘야됨
      hash_tag: formData.tags, // 태그넣어줘야됌
      user_id: user_info.user_id,
    };
    PhotoformData.append("data", JSON.stringify(dhbb));
    PhotoformData.append("post_img", post_img);

    setPhotoFormData(PhotoformData);

    // for (let [key, value] of PhotoformData.entries()) {
    //   console.log("key :", key);
    //   console.log("value :", value);
    // }

    // PhotoformData.append("content", inputValue);
    // PhotoformData.append("id", formData.id);

    // formData.tags.forEach((tag, idx) => {
    //   // createdPost.append("tags", JSON.stringify({ id: idx + 1, content: tag }));
    //   PhotoformData.append(
    //     "tags",
    //     JSON.stringify({ id: idx + 1, content: tag })
    //   );
    // });

    // console.log("createdPost :", createdPost);
    // formData.tags.forEach((tag, idx) => {
    //   createdPost.append("tags", JSON.stringify({ id: idx + 1, content: tag }));
    // });
    // if (imageFile) {
    //   // 이미지 파일이 있다면 추가
    //   createdPost.append("image", formData.imageFile);
    // }
    try {
      // console.log("hi :", fileInput);
      const response = await axios.post(
        `${PROXY}/post/addpost`,
        PhotoformData,
        {
          headers: {
            "Content-Type": "multipart/form-data;charset=utf-8",
          },
          withCredentials: true,
          // user_id: user_info.user_id,
          // post_title: "test",
          // post_content: inputValue,
          // post_img: imageName,
          // callbyuser_id: user_info.id,
          // hash_tag: JSON.stringify(formData.tags),
        }
      );
    } catch (error) {
      console.error("Failed to toggle like", error);
    }
    // setFormData(createdPost);
    setIsSubmitted(true);
  };

  // 태그
  // 기존 태그 불러오기 (get all tags from api)
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const posts = [
      {
        title: "Post 1",
        content: "This is the content of post 1",
        tags: [
          { id: 1, content: "tag1" },
          { id: 2, content: "tag2" },
        ],
      },
      {
        title: "Post 2",
        content: "This is the content of post 2",
        tags: [
          { id: 3, content: "tag3" },
          { id: 4, content: "tag4" },
        ],
      },
    ];

    const duplicatedTagList = posts.reduce((acc, post) => {
      for (let tag of post.tags) {
        acc.add(tag.content);
      }

      return acc;
    }, new Set());
    // Set : 중복을 허용하지 않는 리스트나 배열을 만드는데 유용

    const tagList = [...duplicatedTagList];

    setTags([...tagList]);
  }, []);

  // 태그 input 안에 값
  const [tagInputValue, setTagInputValue] = useState("");

  // 자동완성 태그들
  const [autoCompletes, setAutoCompletes] = useState([]);

  //태그 인풋 값 바뀌면 그에 따라서 자동 완성값들도 변경
  const handleTag = (e) => {
    setTagInputValue(e.target.value);
    if (e.target.value) {
      const autoCompleteData = tags.filter((tag) =>
        tag.includes(e.target.value)
      );
      setAutoCompletes(autoCompleteData);
    }
  };

  const [Image, setImage] = useState("");
  const [imageName, setImageName] = useState();
  const dispatch = useDispatch();
  const fileInput = useRef(null);

  const onChange = (e) => {
    if (e.target.files[0]) {
      setImageName(e.target.value.split("\\")[2]);
      // console.log("asdasdasd", e.target.files[0]);
      setPost_img(e.target.files[0]);
      // PhotoformData.append("post_img", e.target.files[0]);

      // setPhotoFormData(PhotoformData);

      // console.log("PhotoformData :", PhotoformData);

      // console.log("asdasd", PhotoformData);
      //화면에 프로필 사진 표시
      const reader = new FileReader();
      reader.onload = () => {
        // console.log(reader);
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      // dispatch(imgUpdate(formData));
    } else {
      //업로드 취소할 시
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
    }
  };

  // const handletest = () => {
  //   PhotoformData.append("a", "a");
  //   console.log("PhotoformData :", PhotoformData);
  // };
  return (
    <>
      <Nav />
      <ContentWrapper>
        <ContentBox>
          <form onSubmit={onSubmit}>
            <label htmlFor="postContent"></label> <br />
            <div>
              <div>
                <DivBox>
                  <PreImg src={Image} alt="" />
                </DivBox>
                <div>
                  <ImageInput
                    type="file"
                    accept="image/*"
                    name="post_img"
                    onChange={onChange}
                    ref={fileInput}
                  />
                  <Textarea
                    id="content"
                    placeholder="내용을 입력하세요"
                    cols={"30"}
                    rows={10}
                    value={inputValue}
                    onChange={handleChange}
                    required //폼을 비운채로 submit 하면 알림메시지 뜸
                  />
                </div>
              </div>
            </div>
            <label htmlFor="tags">tags</label>
            <InputContainer>
              <TagInput
                type="text"
                placeholder="#태그를 #입력해주세요"
                id="tags"
                value={tagInputValue}
                onChange={handleTag}
              />
              <TagButton onClick={addTag} className="small-button w-16">
                add
              </TagButton>
            </InputContainer>
            <div>
              {autoCompletes &&
                autoCompletes.map((autoComplete) => (
                  <AutoCompleteButton
                    key={autoComplete}
                    onClick={() => handleAutoCompletes(autoComplete)}
                  >
                    #{autoComplete}
                  </AutoCompleteButton>
                ))}
            </div>
            {formData.tags && (
              <TagList>
                {formData.tags.map((tag) => (
                  <Tag key={tag}>
                    <span>#{tag}</span>
                    <Deletebutton onClick={() => deleteTag(tag)}>
                      X
                    </Deletebutton>
                  </Tag>
                ))}
              </TagList>
            )}
            <Div>
              <SubmitButton type="submit">Submit</SubmitButton>
            </Div>
          </form>
        </ContentBox>
      </ContentWrapper>
    </>
  );
};

export default PostInsert;
