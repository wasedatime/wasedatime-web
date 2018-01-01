import React from 'react';
import { Link } from 'react-router-dom';
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
    const regex = new RegExp(`(${termUnion})`, 'ig');
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

const CourseItem = ({ searchTerm, course }) => {
  const title = highlight(searchTerm, course.title);
  const instructor = highlight(searchTerm, course.instructor);
  return (
    <li className="courseItem">
      <Link className="courseItem__link" to={`/syllabus/${course._id.$oid}`}>
        <div className="courseItem__title">{title}</div>
      </Link>
      <div className="courseItem__instructor">{instructor}</div>
    </li>
  );
};

export default CourseItem;
