import styled from "styled-components";

export const AdminWrap = styled.div`
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  & .AdminBody {
    margin: 0 30px;
    width: 100%;
  }
  & .AdminBody h2 {
  }
  & .AdminBody span {
  }
  & .AdminContainer {
    display: flex;
    width: 100%;
  }
  /* admin menu */
  & .AdminMenuBox {
    width: 20%;
    height: 200px;
    margin: 30px 10px 30px 0;
  }
  & .AdminMenuTitle {
    box-sizing: border-box;
    /* width: 100%; */
    height: 50px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    display: flex;
    align-items: center;
  }
  & .AdminMenuTitle span {
    font-size: 18px;
    margin-left: 10px;
  }
  & .AdminMenuBody {
    padding: 10px;
  }
  & .AdminMenuBody span {
    font-size: 14px;
  }
  & .AdminMenuBody ul {
  }
  & .AdminMenuBody ul li {
    list-style: none;
    margin: 5px 0;
    cursor: pointer;
  }
  & .AdminMenuBody ul li:hover {
    font-weight: 800;
  }
  /* 유저리스트 */
  & .AdminUserList {
    margin: 30px 0;
    width: 80%;
    /* border-bottom: 1px solid; */
  }

  & .AdminUserList ul {
    margin-bottom: 0;
    padding-left: 0;
    display: flex;
  }
  & .titleBox {
    height: 50px;
    border: 1px solid;
    border-right: none;
    border-left: none;
    display: flex;
    margin-bottom: 20px;
  }
  & .titleId,
  .titleName,
  .titleState,
  .titleCreate,
  .titleManagement {
    width: 25%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  }
  & .titleId,
  .titleState {
    width: 10%;
  }
  & .titleManagement {
    justify-content: center;
  }
  & .titleId span,
  .titleName span,
  .titleState span,
  .titleCreate span,
  .titleManagement span {
    font-size: 18px;
    font-weight: 500;
  }

  & .AdminUserList ul li {
    list-style: none;
  }
  & .bodyUl {
    margin: 5px 0;
  }
  & .AdminUserList ul li img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const UserListWrap = styled.div`
  margin-bottom: 20px;
  display: flex;
  &:last-child {
    border-bottom: 1px solid;
    padding-bottom: 20px;
  }
  & .listId,
  .listName,
  .listState,
  .listCreate,
  .listManagement {
    width: 25%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  }
  .listName {
    display: block;
  }

  & .listId,
  .listState {
    width: 10%;
  }
  & .listName .profile_img {
    /* width: 100px; */
  }
  & .listName .profile_img img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  & .listName .profile_img span {
    font-size: 18px;
    margin-left: 10px;
  }
  & .listId span,
  .listState span,
  .listCreate span {
    font-size: 16px;
    font-weight: 400;
  }
  & .listManagement span {
    border: 1px solid;
    padding: 5px;
    cursor: pointer;
    transition: 1s;
  }
  & .listManagement span:hover {
    background-color: black;
    color: white;
  }
`;
