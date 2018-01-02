import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from './Navigation';
import logo from '../img/logo.png';

const StyledHeader = styled('header')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.3rem 1rem;
  height: 75px;
  background: #222222;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
`;

const StyledLink = styled(Link)`
  margin-right: 0.5rem;
`;

const Logo = styled('img')`
  width: 60px;
  height: 60px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <Logo src={logo} alt="Wasetime logo" />
      </StyledLink>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
