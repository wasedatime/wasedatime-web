import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faBook,
  faBuilding,
  faBus
} from '@fortawesome/free-solid-svg-icons';

import { media } from '../styled-components/utils';

const StyledNav = styled('nav')`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

const StyledLink = styled(Link)`
  padding: 0.2em 0.5em 0 0.5em;
  text-align: center;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 330;
`;

const StyledButton = styled('button')`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  outline: none;
  padding: 0;
  background-color: inherit;
  color: ${props =>
    props.isClicked ? props.theme.colorPrimary : props.theme.white};
  &:hover {
    color: ${props => props.theme.colorPrimary};
  }
`;

const StyledSpan = styled('span')`
  font-size: 0.55em;
  font-weight: 100;
  ${media.phone`font-size: 0.5em;`};
`;

const Navigation = props => {
  const pathname = props.location.pathname;
  const navItems = [
    {
      name: 'Timetable',
      path: '/timetable',
      icon: faCalendarAlt
    },
    {
      name: 'Syllabus',
      path: '/syllabus',
      icon: faBook
    },
    {
      name: 'RoomFinder',
      path: '/roomfinder',
      icon: faBuilding
    },
    {
      name: 'Bus',
      path: '/bus',
      icon: faBus
    }
  ];
  const styledLinks = navItems.map(item => {
    const itemName = item['name'];
    const itemPath = item['path'];
    const itemIcon = item['icon'];
    const isClicked = pathname.includes(itemPath);
    const fontBase = (
      <FontAwesomeIcon icon={itemIcon} size="2x" transform="shrink-2" />
    );
    return (
      <StyledLink to={itemPath} key={itemPath}>
        <StyledButton isClicked={isClicked}>
          {fontBase}
          <StyledSpan>{itemName}</StyledSpan>
        </StyledButton>
      </StyledLink>
    );
  });

  return <StyledNav>{styledLinks}</StyledNav>;
};

export default withRouter(Navigation);
