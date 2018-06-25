import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faBook, faBuilding,
  faBus } from '@fortawesome/free-solid-svg-icons';

const StyledNav = styled('nav')`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

const StyledLink = styled(Link)`
  padding: 1rem 1.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 330;
  color:#fff;
  &:hover {
    color: #b51e36;
  }
`;

const Navigation = (props) => {
  const pathname = props.location.pathname;
  const navItems = [{
    path: "/timetable",
    icon: faCalendarAlt
  },{
    path: "/syllabus",
    icon: faBook
  },{
    path: "/roomfinder",
    icon: faBuilding
  },{
    path: "/bus",
    icon: faBus
  }];
  const styledLinks = navItems.map((item) => {
    const itemPath = item["path"];
    const itemIcon = item["icon"];
    // TODO see if inline style textShadow: "0px 0px 5px white" works
    const linkStyle = pathname.includes(itemPath)
      ? {color: "#b51e36"} : {};
    const fontBase = <FontAwesomeIcon icon={itemIcon}
      size="2x" transform="shrink-2" />
    return (
      <StyledLink to={itemPath} key={itemPath} style={linkStyle}>
        {fontBase}
      </StyledLink>
    );
  });


  return (
    <StyledNav>
      {styledLinks}
    </StyledNav>
  );
};

export default withRouter(Navigation);
