import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled('nav')`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

const StyledLink = styled(Link)`
  padding: 2rem 0.8rem;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 330;
`;

const Navigation = () => {
  return (
    <StyledNav>
      <StyledLink to="/syllabus">Syllabus</StyledLink>
      <StyledLink to="/roomfinder">RoomFinder</StyledLink>
      <StyledLink to="/bus">Bus</StyledLink>
    </StyledNav>
  );
};

export default Navigation;
