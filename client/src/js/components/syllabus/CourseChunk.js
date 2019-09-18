import React from 'react';

import FetchedCourseItem from '../../containers/syllabus/FetchedCourseItem';
import { UnstyledUList } from '../../styled-components/List';

const CourseChunk = ({ chunk, searchTerm, searchLang }) => {
  return (
    <UnstyledUList>
      {chunk.map(course => (
        <FetchedCourseItem
          key={course._id}
          searchTerm={searchTerm}
          searchLang={searchLang}
          course={course}
        />
      ))}
    </UnstyledUList>
  );
};

export default CourseChunk;
