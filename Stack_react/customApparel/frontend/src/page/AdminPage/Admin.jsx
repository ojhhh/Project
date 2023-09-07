import React, { useState } from "react";
import { AdminWrap, UserListWrap } from "./Admin.styled";
import { Nav } from "../../page";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { useSelector } from "react-redux";

const PROXY = process.env.REACT_APP_PROXY;

const Admin = () => {
  const userInfo = useSelector((state) => state.mypage.data);

  const [menu, setMenu] = useState("admin");

  const { data, isLoading, refetch } = useQuery(
    {
      queryKey: ["userManagement", menu],
      queryFn: async () => {
        return await axios.get(`${PROXY}/${menu}`);
      },
    },
    { staleTime: 0 }
  );

  // 가입 승인
  const handleAccept = useMutation(
    (user_id) => {
      return axios.post(`${PROXY}/admin/accept`, { user_id });
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  // 가입 승인 후 권한 제거
  const handleReject = useMutation(
    (user_id) => {
      return axios.post(`${PROXY}/admin/reject`, { user_id });
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const handleTime = (time) => {
    const year = time.split("-")[0].substr(2, 4);
    const month = time.split("-")[1];
    const day = time.split("-")[2].substr(0, 2);
    const dayTime = time.split(":")[0].substr(-2) + ":" + time.split(":")[1];

    return (time = year + "/" + month + "/" + day + " " + dayTime);
  };

  if (isLoading) return <div>Loading ...</div>;
  if (
    (isLoading && userInfo != null) ||
    (userInfo?.user_id != undefined && userInfo?.user_id == "admin")
  )
    console.log(userInfo);

  return (
    <div>
      <Nav />
      {userInfo?.user_id ? (
        <AdminWrap>
          <div className="AdminBody">
            <div>
              <h2>USER MANAGEMENT ({data.data.length})</h2>
            </div>
            <div className="AdminContainer">
              {/*  */}
              <div className="AdminMenuBox">
                <div className="AdminMenuTitle">
                  <span>Menu</span>
                </div>
                <div className="AdminMenuBody">
                  <span>UserInfo</span>
                  <ul>
                    <li onClick={() => setMenu("admin")}>View All Users</li>
                    <li onClick={() => setMenu("admin/unsubscriber")}>
                      Unsubscribers
                    </li>
                    <li onClick={() => setMenu("admin/subscriber")}>
                      Subscribers
                    </li>
                  </ul>
                </div>
              </div>

              {/*  */}
              <div className="AdminUserList">
                <div className="titleBox">
                  <div className="titleId">
                    <span>Num</span>
                  </div>
                  <div className="titleName">
                    <span>아이디(닉네임)</span>
                  </div>
                  <div className="titleState">
                    <span>상태</span>
                  </div>
                  <div className="titleCreate">
                    <span>가입일</span>
                  </div>
                  <div className="titleManagement">
                    <span>관리</span>
                  </div>
                </div>
                {/*  */}
                {data &&
                  data.data.map((e, index) => (
                    <UserListWrap key={index}>
                      <div className="listId">
                        <span>{e.id}</span>
                      </div>
                      <div className="listName">
                        <div className="profile_img">
                          <img src={`${PROXY}` + e.profile_img} alt="" />
                          <span>{e.user_id}</span>
                          <span>{`(${e.Nick})`}</span>
                        </div>
                      </div>
                      <div className="listState">
                        <span>{e.Accept ? "가입승인" : "가입대기"}</span>
                      </div>
                      <div className="listCreate">
                        <span>{handleTime(e.createdAt)}</span>
                      </div>
                      <div className="listManagement">
                        <span
                          onClick={() =>
                            e.Accept
                              ? handleReject.mutate(e.user_id)
                              : handleAccept.mutate(e.user_id)
                          }
                        >
                          {e.Accept ? "Reject" : "Accept"}
                        </span>
                      </div>
                    </UserListWrap>
                  ))}
              </div>
            </div>
          </div>
        </AdminWrap>
      ) : null}
    </div>
  );
};

export default Admin;
