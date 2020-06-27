import React from "react";
import styled from "styled-components";

import FetchedCourseItem from "../../containers/syllabus/FetchedCourseItem";
import EvalsList from "./EvalsList";

const CourseCommentsGroupWrapper = styled('div')`
  background: #fff;
  margin-bottom: 1em;
`;

const CommentsHeader = styled('h3')`
  margin: 0;
  text-align: center;
  background: #eee;
`;

const CourseEvalsGroup = ({ course, evaluations }) => {
  return (
    <CourseCommentsGroupWrapper>
      <FetchedCourseItem searchTerm={""} searchLang={"jp"} course={course} isInCourseEvalsPage={true} />
      <CommentsHeader>Evaluations</CommentsHeader>
      <EvalsList evaluations={evaluations} />
    </CourseCommentsGroupWrapper>
  );
};

export default CourseEvalsGroup;
