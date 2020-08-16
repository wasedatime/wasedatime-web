import React from "react";
import styled from "styled-components";
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
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-size: 2.5rem;
  font-weight: 300;
  ${media.tablet`font-size: 2rem;`};
`;

const StyledForm = styled("form")`
  width: 100%;
  align-self: center;
  background-color: ${props => props.theme.white};
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledTextarea = styled("textarea")`
  border: none;
  background: none;
  outline: none;
  padding: 3px;
  margin: 0;
  flex: 1 0 auto;
`;

const handleScaleChange = event => {};

const handleTextChange = event => {};

const AddEvaluationForm = ({
  toggleModal,
  onNewEvalScalesChange,
  onNewEvalTextChange,
  t
}) => (
  <ExtendedOverlay>
    <StyledSubHeading>
      {t(`courseEvals.Add evaluation to this course`)}
    </StyledSubHeading>
    <button onClick={toggleModal}>Close</button>
    <StyledForm
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <StyledTextarea placeholder="Leave your comments..." />
    </StyledForm>
  </ExtendedOverlay>
);

export default withNamespaces("translation")(AddEvaluationForm);
