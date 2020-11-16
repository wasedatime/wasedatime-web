import React from "react";
import styled from "styled-components";
import { withNamespaces } from "react-i18next";

import FetchedCourseItem from "../../containers/syllabus/FetchedCourseItem";
import ReviewsList from "./ReviewsList";

const CourseReviewsGroupWrapper = styled("div")`
  background: #fff;
  margin-bottom: 1em;
`;

const ReviewsHeader = styled("h3")`
  margin: 0;
  text-align: center;
  background: #eee;
`;

const CourseReviewsGroup = ({ course, reviews, searchLang, reviewLang, t }) => {
  return (
    <CourseReviewsGroupWrapper>
      <FetchedCourseItem
        searchTerm={""}
        searchLang={searchLang}
        course={course}
        isInCourseReviewsPage={true}
        needLineBreak={true}
      />
      <ReviewsHeader>{t(`courseInfo.Reviews`)}</ReviewsHeader>
      {reviews && (
        <ReviewsList
          reviews={reviews}
          searchLang={searchLang}
          reviewLang={reviewLang}
        />
      )}
    </CourseReviewsGroupWrapper>
  );
};

export default withNamespaces("translation")(CourseReviewsGroup);
