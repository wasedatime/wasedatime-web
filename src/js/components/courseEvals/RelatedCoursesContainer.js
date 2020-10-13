import React from "react";
import styled from "styled-components";
import CourseEvalsGroup from "./CourseEvalsGroup";
import ReviewLangSwitches from "./ReviewLangSwitches";
import {media} from "../../styled-components/utils";
import {Overlay} from "../../styled-components/Overlay";
import {withNamespaces} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";

const ExtendedOverlay = styled(Overlay)`
  padding: 0 25px;
  ${media.tablet`padding-right: 2rem;`};
`;

const StyledSubHeading = styled("h2")`
  align-self: flex-start;
  margin: 1rem 0px 0.5rem !important;
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

const RelatedCoursesExplainTooltip = styled("div")`
  position: relative;
  display: inline-block;

  &:hover span {
    visibility: visible;
  }
`;

const RelatedCoursesExplainTooltipText = styled("span")`
  visibility: hidden;
  width: 150px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  margin-left: 5px;
  font-size: 0.6em;
  position: absolute;
  z-index: 1;
  ${media.phoneMini`left: -400%; top: 100%;`};
`;

const getCourseKey = (course) =>
  course.ks.find((key) => key.s === "SILS" || key.s === "PSE") &&
  course.t.toLowerCase().includes("seminar")
    ? course._id.substring(0, 12)
    : course._id.substring(0, 10);

class RelatedCoursesContainer extends React.Component {
  state = {
    reviewLang: this.props.lng,
  };

  switchReviewLang = (lang) => this.setState({ reviewLang: lang });

  render() {
    const { relatedCourses, courseEvals, searchLang, t } = this.props;
    return (
      <ExtendedOverlay>
        <StyledSubHeading>
          {t(`courseEvals.Related courses`)}{" "}
          <RelatedCoursesExplainTooltip>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              style={{ fontSize: "0.7em" }}
            ></FontAwesomeIcon>
            <RelatedCoursesExplainTooltipText>
              {t(`courseEvals.Related courses explanation`)}
            </RelatedCoursesExplainTooltipText>
          </RelatedCoursesExplainTooltip>
        </StyledSubHeading>
        <ReviewLangSwitches
          reviewLang={this.state.reviewLang}
          switchReviewLang={this.switchReviewLang}
          isInHeading={false}
        />
        <RelatedCoursesWrapper>
          {relatedCourses.map((relatedCourse, i) => (
            <CourseEvalsGroup
              course={relatedCourse}
              reviews={courseEvals[getCourseKey(relatedCourse)]}
              searchLang={searchLang}
              reviewLang={this.state.reviewLang}
              key={i}
            />
          ))}
        </RelatedCoursesWrapper>
      </ExtendedOverlay>
    );
  }
}

export default withNamespaces("translation")(RelatedCoursesContainer);
