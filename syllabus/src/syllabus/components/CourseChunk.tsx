import React from "react";

import FetchedCourseItem from "../containers/FetchedCourseItem";
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
