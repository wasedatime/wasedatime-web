import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import EvaluationStars from "./EvaluationStars";
import { media } from "../../styled-components/utils";
import { sizes } from "../../styled-components/utils";
import { withNamespaces } from "react-i18next";

const EvaluationScalesRow = styled("div")`
  display: flex;
  flex-direction: row;
  font-size: 1.5em;
  background: #eee;
  ${media.tablet`padding: 1rem; font-size: 1.2em;`};
  ${media.phoneMini`padding: 1rem; font-size: 1em;`};
`;

const EvaluationScalesList = styled("div")`
  flex: 5;
  display: flex;
  flex-direction: row;
  ${media.tablet`flex: 2; flex-direction: column;`};
`;

const EvaluationScale = styled("div")`
  flex: 1;
  padding: 1rem 0px;
  text-align: center;
  color: #333;
  font-size: 0.8em;
  ${media.tablet`
    flex: 1;
    padding: 0.2rem 0px;
    text-align: left;
  `};
`;

const EvaluationsCount = styled("div")`
  flex: 1;
  padding: 1rem 0px;
  padding-top: 1.5rem;
  text-align: center;
  justify-content: flex-start;
  color: #777;
  font-size: 0.6em;
`;

const EvaluationScalesCountContainer = ({
  avgSatisfaction,
  avgDifficulty,
  avgBenefit,
  thisCourseEvalsLength,
  t
}) => (
  <EvaluationScalesRow>
    <EvaluationScalesList>
      <EvaluationScale>
        <EvaluationStars scale={avgSatisfaction} />
        {t(`courseEvals.Satisfaction`)}
      </EvaluationScale>
      <EvaluationScale>
        <EvaluationStars scale={avgDifficulty} />
        {t(`courseEvals.Difficulty`)}
      </EvaluationScale>
      <EvaluationScale>
        <EvaluationStars scale={avgBenefit} />
        {t(`courseEvals.Benefit`)}
      </EvaluationScale>
    </EvaluationScalesList>

    <EvaluationsCount>
      <MediaQuery minWidth={sizes.desktop}>
        {matches =>
          matches ? (
            <span>{thisCourseEvalsLength}</span>
          ) : (
            <h1 style={{ margin: "0px" }}>{thisCourseEvalsLength}</h1>
          )
        }
      </MediaQuery>{" "}
      {t(`courseEvals.Reviews`)}
    </EvaluationsCount>
  </EvaluationScalesRow>
);

export default withNamespaces("translation")(EvaluationScalesCountContainer);
