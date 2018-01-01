import React from 'react';

import SyllabusSearchBar from '../containers/SyllabusSearchBar';
import CourseListContainer from '../containers/CourseListContainer';

const SyllabusSearch = () => {
  return (
    <div className="wrapper__syllabus">
      <SyllabusSearchBar />
      <CourseListContainer />
    </div>
  );
};

export default SyllabusSearch;
