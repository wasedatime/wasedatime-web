import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { highlight } from '../utils/react';
import { media } from '../utils/styledComponents';

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
`;

const StyledButton = styled('button')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: stretch;
  background-color: #ffffff;
  border: none;
  margin: 3px 0px;
  padding: 10px 15px;
  &:active {
    background-color: #ccc;
  }
  width: 75vw;
  ${media.phone`width: 85vw;`};
`;

const StyledTitle = styled('div')`
  text-align: left;
  color: #000;
`;

const Instructor = styled('div')`
  margin-top: 7px;
  text-align: right;
  font-size: 1.4rem;
  color: #666;
`;

const CourseItem = ({ searchTerm, course, style }) => {
  const title = highlight(searchTerm, course.title);
  const instructor = highlight(searchTerm, course.instructor);
  return (
    <Wrapper style={style}>
      <StyledLink to={`/syllabus/${course._id}`}>
        <StyledButton>
          <StyledTitle>{title}</StyledTitle>
          <Instructor>{instructor}</Instructor>
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
