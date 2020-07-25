import React from "react";
import styled from "styled-components";
import EvaluationStars from "./EvaluationStars";
import { media } from "../../styled-components/utils";
import { withNamespaces } from "react-i18next";

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
`

const EvaluationText = styled("div")`
  flex: 1;
  ${media.phoneMini`font-size: 1.4rem;`};
`;

const EvaluationScalesList = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.2em;
  ${media.tablet`font-size: 1em;`};
  ${media.phoneMini`font-size: 1.2rem;`};
`;

const EvaluationScale = styled("div")`
  flex: 1;
`;

const EvalsList = ({ evaluations, t }) => {
  return evaluations.map((evaluation, i) => {
    return (
      <EvaluationsWrapper key={i}>
        {i !== 0 && <EvaluationDivider />}
        <Evaluation>
          <EvaluationText>
            {evaluation["comment"]}
          </EvaluationText>
          <EvaluationScalesList>
            <EvaluationScale>
              {t(`courseEvals.Satisfaction`)}{' '}<EvaluationStars scale={evaluation["satisfaction"]} />
            </EvaluationScale>
            <EvaluationScale>
              {t(`courseEvals.Difficulty`)}{' '}<EvaluationStars scale={evaluation["difficulty"]} />
            </EvaluationScale>
            <EvaluationScale>
              {t(`courseEvals.Benefit`)}{' '}<EvaluationStars scale={evaluation["benefit"]} />
            </EvaluationScale>
          </EvaluationScalesList>
        </Evaluation>
      </EvaluationsWrapper>
    )
  });
}

export default withNamespaces("translation")(EvalsList);
