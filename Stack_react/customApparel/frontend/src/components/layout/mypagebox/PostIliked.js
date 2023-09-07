import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getmypostsIliked } from "../../../features/mypageslice";
const PostIliked = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // getmypageinfo 액션을 디스패치하고, 반환 함수를 사용하여 data 변수를 업데이트
    const fetchData = async () => {
      const data = await dispatch(getmypostsIliked());
      // console.log(data);

      // setImage(`${PROXY}/${data.payload.profile_img}`);
      // setuser_id(data.payload.user_id);
      // setuser_accept(data.payload.Accept);
      // setNickname(data.payload.Nick);
      // const post = await dispatch(getmypostsIliked());
    };
    fetchData();
  }, [dispatch]);
  return <div>PostIliked</div>;
};

export default PostIliked;
