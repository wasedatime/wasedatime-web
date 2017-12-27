import React from 'react';
import PropTypes from 'prop-types';

const ClassroomItem = ({ children }) => {
  if (typeof children.courses !== 'undefined') {
    return (
      <li className="classroomItem">
        <div className="classroomItem__occupied">{children.name}</div>
        <div className="classroomItem__course">{children.courses.title}</div>
      </li>
    );
  } else {
    return (
      <li className="classroomItem">
        <div className="classroomItem__vacant">{children.name}</div>
      </li>
    );
  }
};

export default ClassroomItem;
