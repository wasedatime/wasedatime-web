import React from "react";

import { UnstyledUList } from "@app/components/styles/List";
import { SyllabusKey } from "@app/constants/syllabus-data";
import CourseItemContainer from "@app/containers/CourseItemContainer";
import Course from "@app/types/course";

interface Props {
  chunk: Course[];
  searchTerm: string | string[];
  searchLang: string | string[];
}

const CourseChunk = ({ chunk, searchTerm, searchLang }: Props) => {
  return (
    <UnstyledUList>
      {chunk.map((course) => (
        <CourseItemContainer
          key={course[SyllabusKey.ID]}
          searchTerm={searchTerm}
          searchLang={searchLang}
          course={course}
          expandable
        />
      ))}
    </UnstyledUList>
  );
};

export default CourseChunk;
