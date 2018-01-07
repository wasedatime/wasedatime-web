import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { tokenize, regexify } from '../utils/syllabusSearch';

const highlight = (searchTerm, text) => {
  if (searchTerm.length > 1) {
    const termUnion = tokenize(searchTerm)
      .map(term => {
        const cleanTerm = term.trim().replace(/\W+/g, '\\W+');
        return cleanTerm;
      })
      .join('|');
    const regex = new RegExp(`\\b(${termUnion})`, 'i');
    const textParts = text.split(regex);
    return textParts.map((part, i) => {
      if (i % 2 === 0) {
        return part;
      }
      return <mark key={i}>{part}</mark>;
    });
  } else {
    return text;
  }
};

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-y: hidden;
`;

const StyledListItem = styled('li')`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 4px 0px;
  padding: 10px 15px;
  width: 80vw;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const Instructor = styled('div')`
  margin-top: 7px;
  font-size: 1.4rem;
  color: #666;
  text-align: right;
`;

const CourseItem = ({ searchTerm, course, style }) => {
  const title = highlight(searchTerm, course.title);
  const instructor = highlight(searchTerm, course.instructor);
  return (
    <Wrapper style={style}>
      <StyledListItem>
        <StyledLink to={`/syllabus/${course._id}`}>
          <div>{title}</div>
        </StyledLink>
        <Instructor>{instructor}</Instructor>
      </StyledListItem>
    </Wrapper>
  );
};

export default CourseItem;

CourseItem.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired
};
