import React from 'react';

import CourseItemContainer from '../../containers/syllabus/CourseItemContainer';
import { UnstyledUList } from '../../styled-components/List';

const CourseChunk = ({chunk, searchTerm}) => {
  return (
    <UnstyledUList>
      {chunk.map(course => (
        <CourseItemContainer
          key={course._id}
          searchTerm={searchTerm}
          course={course}
        />
      ))
      }
    </UnstyledUList>
  )
}

export default CourseChunk;
