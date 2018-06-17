import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { highlight } from '../../utils/react';
import { media } from '../../utils/styledComponents';
import fseIcon from '../../../img/syllabus-icons/fse.png';
import cseIcon from '../../../img/syllabus-icons/cse.png';
import aseIcon from '../../../img/syllabus-icons/ase.png';
import pseIcon from '../../../img/syllabus-icons/pse.png';
import silsIcon from '../../../img/syllabus-icons/sils.png';
import cjlIcon from '../../../img/syllabus-icons/cjl.png';


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
  overflow: hidden;
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
${'' /*use flex-basis 0 to distribute YearTerm, Instructor evenly.*/}
  flex: 1 0 0;
  align-self: flex-end;
  margin-right: 7px;
  font-size: 1.7rem;
  text-align: left;
  color: #000;
`;

const Instructor = styled('div')`
  flex: 1 0 0;
  font-size: 1.7rem;
  text-align: right;
  color: #444;
`;

const schoolNameIconMap = {
  'FSE': fseIcon,
  'CSE': cseIcon,
  'ASE': aseIcon,
  'PSE': pseIcon,
  'SILS': silsIcon,
  'CJL': cjlIcon
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

const combineYearTerm = (year, term) => {
  return `${year} ${term}`;
};

const CourseItem = ({ searchTerm, course, style }) => {
  const title = highlight(searchTerm, course.title);
  const instructor = highlight(searchTerm, course.instructor);
  const yearTerm = combineYearTerm(course.year, course.term);
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
