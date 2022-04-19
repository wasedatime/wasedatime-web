import React, { lazy } from "react";

import { UnstyledUList } from "@app/components/styles/List";
import { SyllabusKey } from "@app/constants/syllabus-data";
const CourseItemContainer = lazy(() => import("@app/containers/CourseItemContainer"));
import Course from "@app/types/course";

interface Props {
  chunk: Course[];
  searchTerm: string | string[];
  searchLang: string | string[];
  clearSearchBar: () => void;
}

const CourseChunk = ({
  chunk,
  searchTerm,
  searchLang,
  clearSearchBar,
}: Props) => {
  return (
    <UnstyledUList>
      {chunk.map((course) => (
        <CourseItemContainer
          key={course[SyllabusKey.ID]}
          searchTerm={searchTerm}
          searchLang={searchLang}
          course={course}
          clearSearchBar={clearSearchBar}
          expandable
        />
      ))}
    </UnstyledUList>
  );
};

export default CourseChunk;
