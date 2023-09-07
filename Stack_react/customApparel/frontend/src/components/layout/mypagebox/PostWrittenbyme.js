import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postWrittenbyme } from "../../../features/mypageslice";
import PostListNoUsequery from "../../../page/POSTLISTpage/PostListNoUsequery";
import { Mainwrapper } from "./PostWrittenbyme.styled";

const PostWrittenbyme = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  useEffect(() => {
    // getmypageinfo 액션을 디스패치하고, 반환 함수를 사용하여 data 변수를 업데이트
    const fetchData = async () => {
      const data = await dispatch(postWrittenbyme());
      // console.log(data.payload);
      setData(data.payload);

      // setImage(`${PROXY}/${data.payload.profile_img}`);
      // setuser_id(data.payload.user_id);
      // setuser_accept(data.payload.Accept);
      // setNickname(data.payload.Nick);
      // const post = await dispatch(getmypostsIliked());
    };
    fetchData();
  }, [dispatch]);
  return (
    <div>
      <Mainwrapper>
        <div className="maintitle">내가쓴글</div>
      </Mainwrapper>
      {data ? <PostListNoUsequery value={data} /> : null}
    </div>
  );
};

export default PostWrittenbyme;
