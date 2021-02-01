import React from "react";

// import FetchedCourseItem from "../../containers/syllabus/FetchedCourseItem";
import { UnstyledUList } from "@bit/wasedatime.core.ts.ui.list";
import { SYLLABUS_KEYS } from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";

interface Props {
  chunk: object[];
  searchTerm: string | string[];
  searchLang: string | string[];
}

const CourseChunk = ({ chunk, searchTerm, searchLang }: Props) => {
  return (
    <UnstyledUList>
      {chunk.map((course) => (
        <div key={course[SYLLABUS_KEYS.ID]}>{course[SYLLABUS_KEYS.TITLE]}</div>
      ))}
      {/*<FetchedCourseItem
        key={course[SYLLABUS_KEYS.ID]}
        searchTerm={searchTerm}
        searchLang={searchLang}
        course={course}
        />*/}
    </UnstyledUList>
  );
};

export default CourseChunk;
