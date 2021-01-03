import React from "react";
import styled from "styled-components";
import LanguangeMenu from "./LanguageMenu";

const StyledHeader = styled("header")`
  display: flex;
  flex-direction: row;
  grid-area: 1 / 2 / 2 / 3;
  align-items: center;
  border-bottom: 2px solid #f5f5f5;
  height: 67px;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  z-index: 900;
`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <LanguangeMenu />
      </StyledHeader>
    );
  }
}

export default Header;
