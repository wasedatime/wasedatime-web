import React from "react";
import styled from "styled-components";
import EvaluationStars from "./EvaluationStars";
import { media } from "../../styled-components/utils";
import { withNamespaces } from "react-i18next";
import {
  COURSE_EVAL_LNG,
  COURSE_EVAL_LNG_FULL_NAME,
} from "../../config/course_eval_lng";

const EvaluationsWrapper = styled("div")`
  background: #fff;
`;

const Evaluation = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
`;

const EvaluationDivider = styled("hr")`
  margin: 0px 2em;
  border: 1px solid #ddd;
`;

const EvaluationText = styled("div")`
  ${media.phoneMini`font-size: 1.4rem; flex: 1 0 60%;`};
`;

const GoogleTranslationHint = styled("p")`
  margin: 0;
  margin-top: 5px;
  font-size: 0.7em;
  color: #aaa;
`;

const EvaluationTitle = styled("h6")`
  font-size: 0.7em;
  margin-top: 0;
  margin-bottom: 0.5em;
`;

const EvaluationYear = styled("span")`
  background-color: orange;
  color: #fff;
  padding: 0 0.5em;
  border-radius: 5px;
`;

const EvaluationScalesList = styled("div")`
  word-break: break-word;
  flex: 1 0 6em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1em;
  ${media.tablet`font-size: 1em;`};
  ${media.phoneMini`font-size: 1.2rem; flex: 1 0 40%;`};
`;

const EvaluationScale = styled("div")`
  text-align: end;
`;

const EvalsList = ({ reviews, searchLang, reviewLang, t }) => {
  return reviews.map((review, i) => {
    return (
      <EvaluationsWrapper key={i}>
        {i !== 0 && <EvaluationDivider />}
        <Evaluation>
          <EvaluationText>
            <EvaluationTitle>
              <EvaluationYear>{review["year"]}</EvaluationYear>{" "}
              {review[searchLang === "en" ? "title" : "title_jp"]} ({" "}
              {review[searchLang === "en" ? "instructor" : "instructor_jp"]} )
            </EvaluationTitle>
            <span>
              {review["comment_" + reviewLang].replace("\n", "<br />")}
            </span>
            {COURSE_EVAL_LNG[review["comment_src_lng"]] !== reviewLang && (
              <GoogleTranslationHint>
                Translated from{" "}
                {COURSE_EVAL_LNG_FULL_NAME[review["comment_src_lng"]]} by Google
              </GoogleTranslationHint>
            )}
          </EvaluationText>
          <EvaluationScalesList>
            <EvaluationScale>
              <span>{t(`courseEvals.Satisfaction`)}&nbsp;</span>
              <EvaluationStars scale={review["satisfaction"]} />
            </EvaluationScale>
            <EvaluationScale>
              <span>{t(`courseEvals.Difficulty`)}&nbsp;</span>
              <EvaluationStars scale={review["difficulty"]} />
            </EvaluationScale>
            <EvaluationScale>
              <span>{t(`courseEvals.Benefit`)}&nbsp;</span>
              <EvaluationStars scale={review["benefit"]} />
            </EvaluationScale>
          </EvaluationScalesList>
        </Evaluation>
      </EvaluationsWrapper>
    );
  });
};

export default withNamespaces("translation")(EvalsList);
