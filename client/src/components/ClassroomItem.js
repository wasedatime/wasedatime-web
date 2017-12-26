import React from 'react';
import PropTypes from 'prop-types';

const ClassroomItem = ({ children }) => {
  if (typeof children.courses !== 'undefined') {
    return (
      <li>
        <div style={{ color: 'red' }}>
          {children.name}
          {` `}
          {children.courses.title}
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <div>{children.name}</div>
      </li>
    );
  }
};

export default ClassroomItem;
