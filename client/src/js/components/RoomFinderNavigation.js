import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

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

const Icon = styled('div')`
  align-items: center;
  margin-right: 18px;
  color: #ffffff;
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

const ComingSoonMain = styled(ComingSoon)`
  left: 66px;
`;

const ComingSoonToyama = styled(ComingSoon)`
  left: 222px;
`;

const RoomFinderNavigation = () => {
  return (
    <StyledNav>
      <Icon>
        <FontAwesomeIcon icon={faUniversity} size="2x" transform="shrink-2" />
      </Icon>
      <StyledLink to="/roomfinder#mainCampus">Main</StyledLink>
      <StyledLink to="/roomfinder#nishiWasedaCampus">Nishi</StyledLink>
      <StyledLink to="/roomfinder#toyamaCampus">Toyama</StyledLink>
      <ComingSoonMain>Coming Soon</ComingSoonMain>
      <ComingSoonToyama>Coming Soon</ComingSoonToyama>
    </StyledNav>
  );
};

export default RoomFinderNavigation;
