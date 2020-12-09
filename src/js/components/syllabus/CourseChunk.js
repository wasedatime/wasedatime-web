import React from "react";
import PropTypes from "prop-types";

import FetchedCourseItem from "../../containers/syllabus/FetchedCourseItem";
import { UnstyledUList } from "../../styled-components/List";
import { SYLLABUS_KEYS } from "../../config/syllabusKeys";

const CourseChunk = ({ chunk, searchTerm, searchLang }) => {
  return (
    <UnstyledUList>
      {chunk.map((course) => (
        <FetchedCourseItem
          key={course[SYLLABUS_KEYS.ID]}
          searchTerm={searchTerm}
          searchLang={searchLang}
          course={course}
        />
      ))}
    </UnstyledUList>
  );
};

export default CourseChunk;

CourseChunk.propTypes = {
  chunk: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  searchLang: PropTypes.string.isRequired,
};
