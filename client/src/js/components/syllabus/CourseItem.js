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

const OccurrenceList = styled('ul')`
  list-style: none;
  margin: 0 auto;
  padding: 0px;
  text-align: left;
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

const getDay = day => {
  switch (day) {
    case 1:
      return 'Mon.';
    case 2:
      return 'Tue.';
    case 3:
      return 'Wed.';
    case 4:
      return 'Thur.';
    case 5:
      return 'Fri.';
    case 6:
      return 'Sat.';
    case 7:
      return 'Sun.';
    default:
      return '';
  }
};

const getLocation = (building, classroom) => {
  if (building === '-1') {
    return classroom;
  } else {
    return `${building}-${classroom}`;
  }
};

const getPeriod = (start_period, end_period) => {
  if (start_period === -1) {
    return 'undecided';
  } else if (start_period === end_period) {
    return `${start_period}`;
  } else {
    return `${start_period}-${end_period}`;
  }
};

const CourseItem = ({ searchTerm, course, style }) => {
  const title = highlight(searchTerm, course.title);
  const instructor = highlight(searchTerm, course.instructor);
  const yearTerm = combineYearTerm(course.year, course.term);
  const schoolIcons = mapSchooNameToSchoolIcon(course.schools);
  //Need to use index as keys due to Waseda's data.
  const occurrences = course.occurrences.map((occurrence, index) => {
    const day = getDay(occurrence.day);
    const period = getPeriod(occurrence.start_period, occurrence.end_period);
    const location = getLocation(occurrence.building, occurrence.classroom);
    return (
      <li key={index}>
        <div>{`${day}${period} • ${location}`}</div>
      </li>
    );
  });
  return (
    <Wrapper style={style}>
      <StyledLink to={`/syllabus/${course._id}`}>
        <StyledButton>
          <StyledHeading>{title}</StyledHeading>
          <SchoolIconList>{schoolIcons}</SchoolIconList>
          <StyledDescription>
            <div>
              <YearTerm>{yearTerm}</YearTerm>
              <OccurrenceList>{occurrences}</OccurrenceList>
            </div>
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
