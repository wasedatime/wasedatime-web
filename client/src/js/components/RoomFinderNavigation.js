import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import campus from '../../img/campus.png';

const StyledNav = styled('nav')`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  height: 36px;
  width: 100%;
  padding-left: 26px;
  background-color: #777777;
`;

const Logo = styled('img')`
  width: 27px;
  height: 27px;
  margin-right: 18px;
`;

const StyledLink = styled(Link)`
  padding: 0px 14px;
  color: #ffffff;
  font-family: 'Garamond';
  font-size: 2rem;
  font-weight: 400;
  text-decoration: none;
`;

const ComingSoon = styled('div')`
  top: 105px;
  padding: 1px 5px;
  background-color: pink;
  border-radius: 3px;
  position: fixed;
  display: inline-block;
  font-size: 1.1rem;
`;

const ComingSoonMain = ComingSoon.extend`
  left: 66px;
`;

const ComingSoonToyama = ComingSoon.extend`
  left: 222px;
`;

const RoomFinderNavigation = () => {
  return (
    <StyledNav>
      <Logo src={campus} alt="Campus logo" />
      <StyledLink to="/roomfinder#mainCampus">Main</StyledLink>
      <StyledLink to="/roomfinder#nishiWasedaCampus">Nishi</StyledLink>
      <StyledLink to="/roomfinder#toyamaCampus">Toyama</StyledLink>
      <ComingSoonMain>Coming Soon</ComingSoonMain>
      <ComingSoonToyama>Coming Soon</ComingSoonToyama>
    </StyledNav>
  );
};

export default RoomFinderNavigation;
