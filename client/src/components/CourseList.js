import React from 'react';

import CourseItem from './CourseItem';

const CourseList = ({ courseResults }) => {
  if (courseResults.length !== 0) {
    const resultsCount = courseResults.length;
    const listItems = courseResults.map(course => {
      return <CourseItem key={course._id.$oid} course={course} />;
    });
    return (
      <div>
        <div className="courseList__wrapper">
          <div className="courseList__summary">{`${resultsCount} course(s) found`}</div>
          <ul className="courseList">{listItems}</ul>
        </div>
      </div>
    );
  } else {
    return <div className="courseList__summary">No courses found</div>;
  }
};

export default CourseList;
