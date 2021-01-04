import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import MobileNav from "./MobileNav";
import LanguangeMenu from "./LanguageMenu";
import UserMenu from "./user/UserMenu";
import logo from "../../img/logo.png";

const StyledHeader = styled("header")`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.3rem 1rem;
  height: ${(props) => props.theme.headerHeight};
  background: ${(props) => props.theme.grey2};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin-right: 0.5rem;
`;

const Logo = styled("img")`
  width: 50px;
  height: 50px;
`;

const MobileHeader = () => {
  return (
    <StyledHeader>
      <StyledLink to="/about">
        <Logo src={logo} alt="WasedaTime logo" width="50" height="50" />
      </StyledLink>
      <MobileNav />
      <div style={{ marginLeft: "auto" }}>
        <LanguangeMenu />
        <UserMenu />
      </div>
    </StyledHeader>
  );
};

export default MobileHeader;
