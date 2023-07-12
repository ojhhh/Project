import React from "react";
import { HeaderWrap } from "./Header.styled";

const Header = ({ page }) => {
  return (
    <HeaderWrap>
      <h1>{page}</h1>
    </HeaderWrap>
  );
};

export default Header;
