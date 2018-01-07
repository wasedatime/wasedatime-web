import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const getLocation = (building, classroom) => {
  if (building === '-1') {
    return `others-${classroom}`;
  } else {
    return `${building}-${classroom}`;
  }
};

const getKey = (day, start_period, location) => {
  return `${day}-${start_period}-${location}`;
};

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const Overlay = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: center;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled('button')`
  background-color: #fff;
  padding: 12px;
  margin: 10px 0;
  width: 160px;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  border-bottom: none;
  box-shadow: 0 5px #999;
  font-size: 1.7rem;
`;

const CourseDetailWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

const CoursePage = ({ coursePage }) => {
  const links = coursePage.links.map(link => {
    return (
      <li key={link.school}>
        <a href={link.link}>{link.school}</a>
      </li>
    );
  });

  const occurrences = coursePage.occurrences.map(occurrence => {
    const location = getLocation(occurrence.building, occurrence.classroom);
    const key = getKey(occurrence.day, occurrence.start_period, location);
    return (
      <li key={key}>
        <div>{`Day: ${occurrence.day}`}</div>
        <div>{`Time: ${occurrence.start_period} to ${
          occurrence.end_period
        } period`}</div>
        <div>{`Location: ${location}`}</div>
      </li>
    );
  });
  return (
    <Wrapper>
      <Overlay>
        <CourseDetailWrapper>
          <h2>{coursePage.title}</h2>
          <div>{`Code: ${coursePage.code}`}</div>
          <div>{`Instructor: ${coursePage.instructor}`}</div>
          <div>{`Year: ${coursePage.year}`}</div>
          <div>{`Term: ${coursePage.term}`}</div>
          <div>
            <div>Occurrences: </div>
            <ul>{occurrences}</ul>
          </div>
          <div>
            <div>Official Syllabus Link(s):</div>
            <ul>{links}</ul>
          </div>
        </CourseDetailWrapper>
        <Link to="/syllabus">
          <StyledButton>Return to search</StyledButton>
        </Link>
      </Overlay>
    </Wrapper>
  );
};

export default CoursePage;

CoursePage.propTypes = {
  coursePage: PropTypes.object.isRequired
};

