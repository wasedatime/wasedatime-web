import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CourseItem = ({ course }) => {
  return (
    <li className="courseItem">
      <Link className="courseItem__link" to={`/syllabus/${course._id.$oid}`}>
        <div className="courseItem__title">{course.title}</div>
      </Link>
      <div className="courseItem__instructor">{course.instructor}</div>
    </li>
  );
};

export default CourseItem;
