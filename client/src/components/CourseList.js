import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CourseItem from './CourseItem';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const Overlay = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 36px 25px 25px 25px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ListWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin-bottom: 8vh;
`;

const Summary = styled('div')`
  margin: 10px 0;
  align-self: flex-end;
`;

const StyledList = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  list-style-type: none;
`;

const CourseList = ({ searchTerm, courseResults }) => {
  if (courseResults.length !== 0) {
    const resultsCount = courseResults.length;
    const listItems = courseResults.map(course => {
      return (
        <CourseItem key={course._id} searchTerm={searchTerm} course={course} />
      );
    });
    return (
      <Wrapper>
        <Overlay>
          <ListWrapper>
            <Summary>{`${resultsCount} course(s) found`}</Summary>
            <StyledList>{listItems}</StyledList>
          </ListWrapper>
        </Overlay>
      </Wrapper>
    );
  } else {
    return <Summary>No courses found</Summary>;
  }
};

export default CourseList;

CourseList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  courseResults: PropTypes.array.isRequired
};
