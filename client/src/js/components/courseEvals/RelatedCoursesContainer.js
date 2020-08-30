import React from "react";
import styled from "styled-components";
import CourseEvalsGroup from "./CourseEvalsGroup";
import ReviewLangSwitches from "./ReviewLangSwitches";
import { media } from "../../styled-components/utils";
import { Overlay } from "../../styled-components/Overlay";
import { withNamespaces } from "react-i18next";

const ExtendedOverlay = styled(Overlay)`
  padding: 0 25px;
  ${media.tablet`padding-right: 2rem;`};
`;

const StyledSubHeading = styled("h2")`
  align-self: flex-start;
  margin-top: 1rem 0px;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-size: 2rem;
  font-weight: 300;
  ${media.tablet`font-size: 2rem;`};
`;

const RelatedCoursesWrapper = styled("div")`
  margin-top: 0.5rem;
  max-height: 80vh;
  overflow-y: auto;
`;

const getCourseKey = (course) =>
  course["keys"].find(
    (key) => key["school"] === "SILS" || key["school"] === "PSE"
  ) && course["title"].toLowerCase().includes("seminar")
    ? course["_id"].substring(0, 12)
    : course["_id"].substring(0, 10);

class RelatedCoursesContainer extends React.Component {
  state = {
    reviewLang: this.props.lng,
  };

  switchReviewLang = (lang) => this.setState({ reviewLang: lang });

  render() {
    const { relatedCourses, courseEvals, searchLang, t } = this.props;
    return (
      <ExtendedOverlay>
        <StyledSubHeading>{t(`courseEvals.Related courses`)}</StyledSubHeading>
        <ReviewLangSwitches
          reviewLang={this.state.reviewLang}
          switchReviewLang={this.switchReviewLang}
        />
        <RelatedCoursesWrapper>
          {relatedCourses.map((relatedCourse) => (
            <CourseEvalsGroup
              course={relatedCourse}
              reviews={courseEvals[getCourseKey(relatedCourse)]}
              searchLang={searchLang}
              reviewLang={this.state.reviewLang}
              key={getCourseKey(relatedCourse)}
            />
          ))}
        </RelatedCoursesWrapper>
      </ExtendedOverlay>
    );
  }
}

export default withNamespaces("translation")(RelatedCoursesContainer);
