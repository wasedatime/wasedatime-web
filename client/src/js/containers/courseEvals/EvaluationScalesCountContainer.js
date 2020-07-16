import React from 'react';
import MediaQuery from "react-responsive";
import styled from "styled-components";
import EvaluationStars from "../../components/courseEvals/EvaluationStars";
import { media } from "../../styled-components/utils";
import { sizes } from "../../styled-components/utils";

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
  ${media.tablet`
    flex: 1;
    padding: 0.2rem 0px;
    text-align: left;
  `};
`;

const EvaluationsCount = styled("div")`
  flex: 1;
  padding: 1rem 0px;
  text-align: center;
  justify-content: flex-start;
  color: #333;
`;

const EvaluationScalesCountContainer = (avgSatisfaction, avgDifficulty, avgBenefit, thisCourseEvalsLength) => (
  <EvaluationScalesRow>
    <EvaluationScalesList>
      <EvaluationScale>
        Satisfaction{' '}<EvaluationStars scale={avgSatisfaction} />
      </EvaluationScale>
      <EvaluationScale>
        Difficulty{' '}<EvaluationStars scale={avgDifficulty} />
      </EvaluationScale>
      <EvaluationScale>
        Benefit{' '}<EvaluationStars scale={avgBenefit} />
      </EvaluationScale>
    </EvaluationScalesList>

    <EvaluationsCount style={{ flex: '1', color: '#777', fontSize: '0.7em', paddingTop: '1.5rem' }}>
      <MediaQuery minWidth={sizes.desktop}>
        {matches => matches ? <span>thisCourseEvalsLength</span> : <h1 style={{ margin: '0px' }}>{thisCourseEvalsLength}</h1>}
      </MediaQuery>
      {' '}Evaluations
    </EvaluationsCount>
  </EvaluationScalesRow>
);

export default EvaluationScalesCountContainer;
