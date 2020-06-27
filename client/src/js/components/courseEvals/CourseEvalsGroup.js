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

const getCourseKey = course => {
  // Todo: Get course key of this course
  return 'example_course_key';
}

const getEvaluations = courseKey => {
  // Todo: Get evaluations of this course with its course key
  return [
    {
      "course_key": '',
      "course_code": '',
      "satisfaction": 4,
      "difficulty": 5,
      "benefit": 5,
      "comment": "The final report requires a 3000 minimum word count, so I highly suggest future students to start writing it as soon as possible!",
      "course_year": "2018"
    },
    {
      "course_key": '',
      "course_code": '',
      "satisfaction": 4,
      "difficulty": 5,
      "benefit": 5,
      "comment": "The final report requires a 3000 minimum word count, so I highly suggest future students to start writing it as soon as possible!",
      "course_year": "2018"
    }
  ];
}

const CourseEvalsGroup = ({ course }) => {
  return (
    <CourseCommentsGroupWrapper>
      <FetchedCourseItem searchTerm={""} searchLang={"jp"} course={course} isInCourseEvalsPage={true} />
      <CommentsHeader>Evaluations</CommentsHeader>
      <EvalsList evaluations={getEvaluations(getCourseKey(course))} />
    </CourseCommentsGroupWrapper>
  );
};

export default CourseEvalsGroup;
