import React from 'react';
import styled from "styled-components";
import CourseEvalsGroup from "../../components/courseEvals/CourseEvalsGroup";
import { media } from "../../styled-components/utils";
import { Overlay } from "../../styled-components/Overlay";

const ExtendedOverlay = styled(Overlay)`
  padding: 0 25px;
  ${media.tablet`padding-right: 2rem;`};
`;

const StyledSubHeading = styled("h2")`
  align-self: flex-start;
  margin-top: 1rem 0px;
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-size: 2.5rem;
  font-weight: 300;
  ${media.tablet`font-size: 2rem;`};
`;

const RelatedCoursesWrapper = styled("div")`
  max-height: 80vh;
  overflow-y: auto;
`;

const filterCourseEvalsByKey = (evaluations, courseKey) => evaluations.filter(e => e.course_key === courseKey);

const getCourseKey = course => course["_id"].substring(0, 10);

const RelatedCoursesContainer = ({ relatedCourses, courseEvals }) => (
  <ExtendedOverlay>
    <StyledSubHeading>
      Related courses
    </StyledSubHeading>
    <RelatedCoursesWrapper>
      {
        relatedCourses.map(relatedCourse => <CourseEvalsGroup
          course={relatedCourse}
          evaluations={filterCourseEvalsByKey(courseEvals, getCourseKey(relatedCourse))}
          key={getCourseKey(relatedCourse)}
        />)
      }
    </RelatedCoursesWrapper>
  </ExtendedOverlay>
);

export default RelatedCoursesContainer;
