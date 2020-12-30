import React from "react";
import styled from "styled-components";
import { media } from "../../styled-components/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import ReviewLangSwitches from "./ReviewLangSwitches";
import ReviewScalesCountContainer from "./ReviewScalesCountContainer";
import ReviewsList from "./ReviewsList";

const StyledSubHeading = styled("h2")`
  align-self: flex-start;
  margin: 1rem 0px;
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-size: 2rem;
  font-weight: 300;
  ${media.tablet`font-size: 2rem;`};
`;

const AddReviewButton = styled("button")`
  background-color: #b51e36;
  color: #fff;
  border: 0px;
  border-radius: 5px;
  font-size: 0.9em;
  float: right;
  padding: 0.3em 0.5em;
`;

const Announcement = styled("div")`
  background-color: #48af37;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 5px;
  padding: 5px 10px;
  font-size: 0.7em;
  border-radius: 3px;
  line-height: normal;
`;

const Disclaimer = styled(Announcement)`
  background-color: #aaa;
  margin: 0.5rem 0px;
`;

const ReviewsListWrapper = styled("div")`
  max-height: 60vh;
  overflow-y: auto;
`;

const CourseReviews = ({
  reviews,
  scalesAvg,
  searchLang,
  reviewLang,
  switchReviewLang,
  toggleAddReviewForm,
  t,
}) => (
  <div>
    <StyledSubHeading>
      {t(`courseInfo.Reviews`)}{" "}
      <span style={{ marginLeft: "10px" }}>
        <ReviewLangSwitches
          reviewLang={reviewLang}
          switchReviewLang={switchReviewLang}
          isInHeading={true}
        />
      </span>
      <AddReviewButton onClick={toggleAddReviewForm}>
        <FontAwesomeIcon icon={faPen} /> {t(`courseInfo.Write your Review`)}
      </AddReviewButton>
    </StyledSubHeading>
    <Disclaimer>{t(`courseInfo.Disclaimer`)}</Disclaimer>
    <ReviewsListWrapper>
      <ReviewScalesCountContainer
        avgSatisfaction={scalesAvg.satisfaction}
        avgDifficulty={scalesAvg.difficulty}
        avgBenefit={scalesAvg.benefit}
        thisCourseReviewsLength={reviews.length}
      />
      <ReviewsList
        reviews={reviews}
        searchLang={searchLang}
        reviewLang={reviewLang}
      />
    </ReviewsListWrapper>
    <br />
  </div>
);

export default CourseReviews;
