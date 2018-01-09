import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../utils/styledComponents';
import PropTypes from 'prop-types';

import { Wrapper } from '../styled-components/Wrapper';
import { Overlay } from '../styled-components/Overlay';
import { Button } from '../styled-components/Button';

const ExtendedOverlay = Overlay.extend`
  padding: 25px 20vh;
  font-size: 1.8rem;
  ${media.tablet`padding: 25px 10vh;`};
  ${media.phone`padding: 25px;`};
`;

const StyledHeader = styled('header')`
  padding-bottom: 11px;
  border-bottom: 1px solid #777;
`;

const Title = styled('h2')`
  margin: 8px auto;
`;

const YearTerm = styled('div')`
  font-size: 2rem;
`;

const Instructor = styled('div')`
  margin-top: 8px;
`;

const DetailWrapper = styled('div')`
  margin: 8px 0;
`;

const StyledHeading = styled('h4')`
  margin: 5px auto;
`;

const OccurrenceList = styled('ul')`
  list-style: none;
  margin: 0 auto;
  padding: 0px;
`;

const StyledLink = styled(Link)`
  align-self: center;
`;

const LinkList = styled('ul')`
  padding: 0px 25px;
  margin: 5px auto;
`;

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
  if (start_period === end_period) {
    return start_period;
  } else {
    return `${start_period}-${end_period}`;
  }
};

const getKey = (day, period, location) => {
  return `${day}-${period}-${location}`;
};

const CoursePage = ({ coursePage }) => {
  const links = coursePage.links.map(link => {
    return (
      <li key={link.school}>
        <a href={link.link}>{link.school}</a>
      </li>
    );
  });

  const occurrences = coursePage.occurrences.map(occurrence => {
    const day = getDay(occurrence.day);
    const period = getPeriod(occurrence.start_period, occurrence.end_period);
    const location = getLocation(occurrence.building, occurrence.classroom);
    const key = getKey(day, period, location);
    return (
      <li key={key}>
        <div>{`${day}${period} • ${location}`}</div>
      </li>
    );
  });
  return (
    <Wrapper>
      <ExtendedOverlay>
        <StyledHeader>
          <Title>{coursePage.title}</Title>
          <YearTerm>{`${coursePage.year} ${coursePage.term}`}</YearTerm>
          <Instructor>{coursePage.instructor}</Instructor>
        </StyledHeader>
        <DetailWrapper>
          <StyledHeading>Time • Location</StyledHeading>
          <OccurrenceList>{occurrences}</OccurrenceList>
          <StyledHeading>Code</StyledHeading>
          <div>{coursePage.code}</div>
          <div>
            <StyledHeading>Official Syllabus Links:</StyledHeading>
            <LinkList>{links}</LinkList>
          </div>
        </DetailWrapper>
        <StyledLink to="/syllabus">
          <Button>Return to search</Button>
        </StyledLink>
      </ExtendedOverlay>
    </Wrapper>
  );
};

export default CoursePage;

CoursePage.propTypes = {
  coursePage: PropTypes.object.isRequired
};
