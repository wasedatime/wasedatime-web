import React from "react";
import styled from "styled-components";
import ReviewStars from "./ReviewStars";
import { media } from "../../styled-components/utils";
import { withNamespaces } from "react-i18next";
import { COURSE_REVIEW_LNG_FULL_NAME } from "../../config/course_review_lng";

const ReviewsWrapper = styled("div")`
  background: #fff;
  line-height: 120%;
`;

const Review = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
`;

const ReviewDivider = styled("hr")`
  margin: 0px 2em;
  border: 1px solid #ddd;
`;

const ReviewText = styled("div")`
  ${media.phoneMini`font-size: 1.4rem; flex: 1 0 60%;`};
`;

const GoogleTranslationHint = styled("p")`
  margin: 0;
  margin-top: 5px;
  font-size: 0.7em;
  color: #aaa;
`;

const ReviewCreatedTime = styled(GoogleTranslationHint)`
  margin-top: 0px;
`;

const ReviewTitle = styled("h6")`
  font-size: 0.7em;
  margin-top: 0;
  margin-bottom: 0.5em;
`;

const ReviewYear = styled("span")`
  background-color: orange;
  color: #fff;
  padding: 0 0.5em;
  border-radius: 5px;
`;

const ReviewScalesList = styled("div")`
  word-break: break-word;
  flex: 1 0 6em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1em;
  ${media.tablet`font-size: 1em;`};
  ${media.phoneMini`font-size: 1.2rem; flex: 1 0 40%;`};
`;

const ReviewScale = styled("div")`
  text-align: end;
`;

const ReviewsList = ({ reviews, searchLang, reviewLang, t }) => {
  return reviews.map((review, i) => {
    return (
      <ReviewsWrapper key={i}>
        {i !== 0 && <ReviewDivider />}
        <Review>
          <ReviewText>
            <ReviewTitle>
              <ReviewYear>{review["year"]}</ReviewYear>{" "}
              {review[searchLang === "en" ? "title" : "title_jp"]} ({" "}
              {review[searchLang === "en" ? "instructor" : "instructor_jp"]} )
            </ReviewTitle>
            <span>
              {review["comment_" + reviewLang] !== undefined &&
                review["comment_" + reviewLang].split("\n").map((str) => (
                  <span>
                    {str}
                    <br />
                  </span>
                ))}
            </span>
            {review["src_lang"] ? (
              review["src_lang"] !== reviewLang && (
                <GoogleTranslationHint>
                  Translated from{" "}
                  {COURSE_REVIEW_LNG_FULL_NAME[review["src_lang"]]} by Google
                </GoogleTranslationHint>
              )
            ) : (
              <GoogleTranslationHint>Not translated yet</GoogleTranslationHint>
            )}
            <ReviewCreatedTime>
              {new Date(review["created_at"]).toUTCString()}
            </ReviewCreatedTime>
          </ReviewText>
          <ReviewScalesList>
            <ReviewScale>
              <span>{t(`courseInfo.Satisfaction`)}&nbsp;</span>
              <ReviewStars scale={review["satisfaction"]} />
            </ReviewScale>
            <ReviewScale>
              <span>{t(`courseInfo.Difficulty`)}&nbsp;</span>
              <ReviewStars scale={review["difficulty"]} />
            </ReviewScale>
            <ReviewScale>
              <span>{t(`courseInfo.Benefit`)}&nbsp;</span>
              <ReviewStars scale={review["benefit"]} />
            </ReviewScale>
          </ReviewScalesList>
        </Review>
      </ReviewsWrapper>
    );
  });
};

export default withNamespaces("translation")(ReviewsList);
