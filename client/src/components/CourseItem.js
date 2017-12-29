import React from 'react';
import PropTypes from 'prop-types';

const CourseItem = ({ course }) => {
  return (
    <li className="courseItem">
      <div className="courseItem__title">{course.title}</div>
      <div className="courseItem__instructor">{course.instructor}</div>
    </li>
  );
};

export default CourseItem;
