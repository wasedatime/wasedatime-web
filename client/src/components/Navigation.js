import React from 'react';
import styled from 'styled-components';

import NavLink from './NavLink';

const StyledNav = styled('nav')`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

const StyledNavLink = styled(NavLink)`
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
      <StyledNavLink link="/syllabus" children="Syllabus" />
      <StyledNavLink link="/roomfinder" children="RoomFinder" />
      <StyledNavLink link="/bus" children="Bus" />
    </StyledNav>
  );
};

export default Navigation;
