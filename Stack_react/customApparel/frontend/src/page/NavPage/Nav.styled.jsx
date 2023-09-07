import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navdiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & .navContainer {
    margin-bottom: 20px;
    width: 1240px;
    height: 100px;
    /* border: 1px solid; */
    box-sizing: border-box;
    box-shadow: 10px 5px 5px grey;
    border-radius: 15px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 1;
    background-color: white;
  }
  & .logo {
  }
  & .logo span {
    font-weight: 600;
    font-size: 32px;
  }
  & .menutabs {
  }

  & .menutabs ul {
    display: flex;
    padding: 0;
  }
  & .menutabs ul li {
    list-style-type: none;
    margin-right: 10px;
    cursor: pointer;
    font-size: 14px;
    transition: 1s;
  }
  & .menutabs ul li:hover {
    font-size: 16px;
    font-weight: 700;
  }
  & .logo2 {
    padding-top: 107px;
    font-weight: 600;
    font-size: 32px;
  }
  & .logo3 {
    padding-top: 107px;
    font-weight: 600;
    font-size: 32px;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: black;
  }
  &:active {
    color: black;
  }
`;
