import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { highlight } from '../utils/react';
import { media } from '../utils/styledComponents';
import fseIcon from '../../img/fse-cropped.png';
import cseIcon from '../../img/cse-cropped.png';
import aseIcon from '../../img/ase-cropped.png';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-y: hidden;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  overflow-x: hidden;
`;

const StyledButton = styled('button')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: stretch;
  background-color: #ffffff;
  border: none;
  margin: 3px 0px;
  padding: 9px 12px;
  &:active {
    background-color: #ccc;
  }
  width: 75vw;
  ${media.phone`width: 85vw;`};
`;

const StyledHeading = styled('h3')`
  margin: 0px;
  text-align: left;
  font-size: 1.8rem;
  font-weight: 600;
  color: #000;
`;

const SchoolIconList = styled('ul')`
  display: flex;
  flex-direction: row;
  margin: 3px 0px;
  padding: 0px;
  list-style: none;
  list-style-type: none;
`;

const SchoolIconItem = styled('li')`
  margin: 0px 3px;
  padding: 0px;
`;

const SchoolIconImage = styled('img')`
  height: 28px;
`;

const StyledDescription = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const YearTerm = styled('div')`
  flex: 1 0 auto;
  align-self: flex-end;
  margin-right: 7px;
  font-size: 1.7rem;
  text-align: left;
  color: #000;
`;

const Instructor = styled('div')`
  font-size: 1.7rem;
  text-align: right;
  color: #444;
`;

const schoolNameIconMap = {
  'Schl of Fund Sci/Eng': fseIcon,
  'Schl Cre Sci/Eng': cseIcon,
  'Schl Adv Sci/Eng': aseIcon
};

const mapSchooNameToSchoolIcon = schoolNames => {
  return schoolNames.map(schoolName => {
    return (
      <SchoolIconItem key={schoolName}>
        <SchoolIconImage src={schoolNameIconMap[schoolName]} />
      </SchoolIconItem>
    );
  });
};

const termMap = {
  'fall semester': 'Fall',
  'spring semester': 'Spring'
};

const simplifyYearTerm = (year, term) => {
  return `${year} ${termMap[term]}`;
};

const CourseItem = ({ searchTerm, course, style }) => {
  const title = highlight(searchTerm, course.title);
  const instructor = highlight(searchTerm, course.instructor);
  const yearTerm = simplifyYearTerm(course.year, course.term);
  const schoolIcons = mapSchooNameToSchoolIcon(course.schools);
  return (
    <Wrapper style={style}>
      <StyledLink to={`/syllabus/${course._id}`}>
        <StyledButton>
          <StyledHeading>{title}</StyledHeading>
          <SchoolIconList>{schoolIcons}</SchoolIconList>
          <StyledDescription>
            <YearTerm>{yearTerm}</YearTerm>
            <Instructor>{instructor}</Instructor>
          </StyledDescription>
        </StyledButton>
      </StyledLink>
    </Wrapper>
  );
};

export default CourseItem;

CourseItem.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired
};
