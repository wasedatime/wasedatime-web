import React from 'react';

import CourseItem from './CourseItem';
import '../styles/courseList.css';

const CourseList = props => {
  if (props.courseResults.length !== 0) {
    const listItems = props.courseResults.map(course => {
      return <CourseItem key={course._id.$oid} course={course} />;
    });
    return (
      <div>
        <div className="courseList__wrapper">
          <ul className="courseList">{listItems}</ul>
        </div>
      </div>
    );
  } else {
    return <div>No courses found</div>;
  }
};

export default CourseList;
