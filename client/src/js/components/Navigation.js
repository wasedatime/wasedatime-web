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
  padding: 2rem 1.5rem;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 330;
`;

const Navigation = () => {
  return (
    <StyledNav>
      <StyledLink to="/timetable">
        <i className="fas fa-calendar-alt fa-2x" data-fa-transform="shrink-2"></i>
      </StyledLink>
      <StyledLink to="/syllabus">
        <i className="fas fa-book fa-2x" data-fa-transform="shrink-2"></i>
      </StyledLink>
      <StyledLink to="/roomfinder">
        <i className="fas fa-building fa-2x" data-fa-transform="shrink-2"></i>
      </StyledLink>
      <StyledLink to="/bus">
        <i className="fas fa-bus fa-2x" data-fa-transform="shrink-2"></i>
      </StyledLink>
    </StyledNav>
  );
};

export default Navigation;
