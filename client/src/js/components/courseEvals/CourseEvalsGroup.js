import React from "react";
import styled from "styled-components";
import { withNamespaces } from "react-i18next";

import FetchedCourseItem from "../../containers/syllabus/FetchedCourseItem";
import EvalsList from "./EvalsList";

const CourseEvalsGroupWrapper = styled('div')`
  background: #fff;
  margin-bottom: 1em;
`;

const EvalsHeader = styled('h3')`
  margin: 0;
  text-align: center;
  background: #eee;
`;

const CourseEvalsGroup = ({ course, evaluations, searchLang, t }) => {
  return (
    <CourseEvalsGroupWrapper>
      <FetchedCourseItem searchTerm={""} searchLang={searchLang} course={course} isInCourseEvalsPage={true} />
      <EvalsHeader>{t(`courseEvals.Evaluations`)}</EvalsHeader>
      <EvalsList evaluations={evaluations} />
    </CourseEvalsGroupWrapper>
  );
};

export default withNamespaces("translation")(CourseEvalsGroup);
