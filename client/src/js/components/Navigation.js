import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
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
  ${'' /* color: #ffffff; */}
  text-align: center;
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 330;
`;

const Navigation = (props) => {
  var pathname = props.location.pathname;
  var navItems = [{
    "path": "/timetable",
    "name": "calendar-alt"
  },{
    "path": "/syllabus",
    "name": "book"
  },{
    "path": "/roomfinder",
    "name": "building"
  },{
    "path": "/bus",
    "name": "bus"
  }];
  var styledLinks = navItems.map((nav) => {
    var fontName = nav['name'];
    // TODO see if inline style textShadow: "0px 0px 5px white" works :'(
    var fontStyle = pathname.includes(nav['path'])
      ? {color: "#b51e36"} : {color: "#ffffff"};
    var font = <i className={`fas fa-${fontName} fa-2x`}
                data-fa-transform="shrink-2" ></i>
    return (
      <StyledLink to={nav['path']} key={fontName} style={fontStyle}>
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
