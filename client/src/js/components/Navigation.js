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
  padding: 2rem 1.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 330;
  color:#fff;
  &:hover {
    color: #b51e36;
  }
`;

const PreAlpha = styled('div')`
  position: absolute;
  top: 5.6rem;
  font-size: 0.8rem;
  color: #fff;
  background-color: #6495ED;
  padding: 0.25rem;
  border-radius: 0.5rem;
`

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
    const font = itemPath === "/timetable" ?
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        {fontBase}<PreAlpha>pre-alpha</PreAlpha>
      </div> :
      fontBase;
    return (
      <StyledLink to={itemPath} key={itemPath} style={linkStyle}>
        {font}
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
