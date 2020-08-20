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
  flex-direction: column;
  justify-content: space-between;
`;

const ScalesList = styled("div")`
  display: flex;
  flex-direction: row;
  font-size: 1.1em;
  ${media.tablet`flex: 2; flex-direction: column;`};
`;

const Scale = styled("div")`
  margin: 0.5em 0;
  flex: 1 0 33%;
  text-align: center;
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

class AddEvaluationForm extends React.Component {
  state = {
    hoveredSatisfactionStar: 0,
    hoveredDifficultyStars: 0,
    hoveredBenefitStars: 0,
    isSatisfactionScaled: false,
    isDifficultyScaled: false,
    isBenefitScaled: false
  };

  stars(label, isScaled, hoveredStar) {
    let stars = [];
    for (let n = 1; n <= 5; n++) {
      let hoveredStars = "";
      const color = isScaled || n <= hoveredStar ? "orange" : "#fff";
      if (label === "satisfaction") hoveredStars = "hoveredSatisfactionStars";
      if (label === "difficulty") hoveredStars = "hoveredDifficultyStars";
      if (label === "benefit") hoveredStars = "hoveredBenefitStars";
      stars.push(
        <FontAwesomeIcon
          key={n}
          icon={faStar}
          style={{ color: color }}
          onMouseOver={() => this.setState({ [hoveredStars]: n })}
          onMouseOut={() => this.setState({ [hoveredStars]: 0 })}
        />
      );
    }
    return stars;
  }

  changeStarsColor(label, scale) {
    switch (label) {
      case "satisfaction":
        this.setState({ hoveredSatisfactionStar: scale });
        break;
      case "difficulty":
        this.setState({ hoveredDifficultyStars: scale });
        break;
      case "benefit":
        this.setState({ hoveredBenefitStars: scale });
        break;
    }
  }

  render() {
    const {
      toggleModal,
      onNewEvalScalesChange,
      onNewEvalTextChange,
      t
    } = this.props;
    const {
      hoveredSatisfactionStars,
      hoveredDifficultyStars,
      hoveredBenefitStars,
      isSatisfactionScaled,
      isDifficultyScaled,
      isBenefitScaled
    } = this.state;

    return (
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
          Please choose the score for each scale
          <ScalesList>
            <Scale>
              {this.stars(
                "satisfaction",
                isSatisfactionScaled,
                hoveredSatisfactionStars
              )}{" "}
              Satisfaction
            </Scale>
            <Scale>
              {this.stars(
                "difficulty",
                isDifficultyScaled,
                hoveredDifficultyStars
              )}{" "}
              Difficulty
            </Scale>
            <Scale>
              {this.stars("benefit", isBenefitScaled, hoveredBenefitStars)}{" "}
              Benefit
            </Scale>
          </ScalesList>
          Please share your experiences, feelings, and even advices about the
          course
          <StyledTextarea placeholder="Leave your comments..." />
        </StyledForm>
      </Overlay>
    );
  }
}

export default withNamespaces("translation")(AddEvaluationForm);
