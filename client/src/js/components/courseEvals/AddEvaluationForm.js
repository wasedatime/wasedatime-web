import React from "react";
import styled from "styled-components";
import { media } from "../../styled-components/utils";
import { Overlay } from "../../styled-components/Overlay";
import { withNamespaces } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faStar } from "@fortawesome/free-solid-svg-icons";

const StyledSubHeading = styled("h2")`
  align-self: flex-start;
  margin-top: 1rem 0px;
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-size: 2.5rem;
  font-weight: 300;
  ${media.tablet`font-size: 2rem;`};
`;

const CloseFormButton = styled("button")`
  background-color: rgb(148, 27, 47);
  float: right;
  color: #fff;
  border: 0px;
  border-radius: 5px;
  font-size: 0.7em;
  padding: 0.3em;
`;

const StyledForm = styled("form")`
  width: 100%;
  align-self: center;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledTextarea = styled("textarea")`
  border: none;
  background-color: ${props => props.theme.white};
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
  <Overlay>
    <StyledSubHeading>
      {t(`courseEvals.Add evaluation to this course`)}
      <CloseFormButton onClick={toggleModal}>
        <FontAwesomeIcon icon={faTimes} /> Close
      </CloseFormButton>
    </StyledSubHeading>

    <StyledForm
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <StyledTextarea placeholder="Leave your comments..." />
    </StyledForm>
  </Overlay>
);

export default withNamespaces("translation")(AddEvaluationForm);
