import React from "react";
import styled from "styled-components";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { WithTranslation, withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider";
import Statistic from "semantic-ui-react/dist/commonjs/views/Statistic";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import { ThemeContext } from "@app/utils/theme-context";

interface Props extends WithTranslation {
  closeModal: () => void;
  scales: {
    satisfaction: number;
    difficulty: number;
    benefit: number;
  };
  text: string;
  handleFormSubmit: () => void;
  handleScaleChange: (target: string, score: number) => void;
  handleTextChange: (text: string) => void;
  isSending: boolean;
}

interface State {
  paintedSatisfactionStars: number;
  paintedDifficultyStars: number;
  paintedBenefitStars: number;
}

const StyledSubHeading = styled("h4")`
  align-self: flex-start;
  margin: 1rem 0px !important;
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-weight: 300;
  ${media.tablet`// font-size: 2rem;`};
  font-size: 16px;
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
  ${media.tablet`flex: 2; flex-direction: column;`};
`;

const Scale = styled(Statistic)`
  margin: 0.5em 0px !important;
  padding: 0px 2em !important;
  flex: 1 0 33%;
  text-align: center;
  font-size: 0.5em !important;
`;

const Stars = styled(Statistic.Value)``;

const StyledTextarea = styled("textarea")`
  border-radius: 10px;
  outline: none;
  padding: 10px;
  margin: 5px 0 0;
  height: 100px;
  flex: 1 0 auto;
  font-size: 1.5em !important;
`;

const FormActions = styled("div")`
  display: flex;
  margin-top: 10px;
  font-size: 1.5em !important;
`;

const SubmitFormButton = styled("button")`
  flex: 0 0 20%;
  background-color: orange;
  color: #fff;
  border: 0px;
  border-radius: 5px 0 0 5px;
  ${media.tablet`flex: 0 0 30%;`};
`;

const CloseFormButton = styled("button")`
  flex: 0 0 20%;
  background-color: #aaa;
  color: #fff;
  border: 0px;
  border-radius: 0 5px 5px 0;
  ${media.tablet`flex: 0 0 30%;`};
`;

const FieldLegend = styled(Divider)`
  font-size: 1.5em !important;
  width: 60% !important;
  margin: 1em 20% !important;
  ${props => props.isDark && "color: #fff !important;"}
`;

class AddReviewForm extends React.Component<Props, State> {
  state = {
    paintedSatisfactionStars: 0,
    paintedDifficultyStars: 0,
    paintedBenefitStars: 0,
  };

  static contextType = ThemeContext;

  displayStars = (label, selectedStar, paintedStar) => {
    let stars = [];
    for (let n = 1; n <= 5; n++) {
      let paintedStarsLabel = "";
      switch (label) {
        case "satisfaction":
          paintedStarsLabel = "paintedSatisfactionStars";
          break;
        case "difficulty":
          paintedStarsLabel = "paintedDifficultyStars";
          break;
        case "benefit":
          paintedStarsLabel = "paintedBenefitStars";
          break;
        default:
          paintedStarsLabel = "paintedSatisfactionStars";
      }
      const color =
        n <= paintedStar || (paintedStar === 0 && n <= selectedStar)
          ? "orange"
          : "#ddd";

      const newStateOnMouseOver = { [paintedStarsLabel]: n } as Pick<State, keyof State>;
      const newStateOnMouseOut = { [paintedStarsLabel]: selectedStar } as Pick<State, keyof State>;

      stars.push(
        <FontAwesomeIcon
          key={n}
          icon={faStar}
          style={{ color: color, cursor: "pointer" }}
          onMouseOver={() => this.setState(newStateOnMouseOver)}
          onMouseOut={() => this.setState(newStateOnMouseOut)}
          onClick={() => this.props.handleScaleChange(label, n)}
        />
      );
    }
    return stars;
  };

  changeStarsColor = (label, scale) => {
    switch (label) {
      case "satisfaction":
        this.setState({ paintedSatisfactionStars: scale });
        break;
      case "difficulty":
        this.setState({ paintedDifficultyStars: scale });
        break;
      case "benefit":
        this.setState({ paintedBenefitStars: scale });
        break;
      default:
        this.setState({ paintedSatisfactionStars: scale });
    }
  };

  handleTextareaChange = (event) => {
    event.preventDefault();
    const inputText = event.target.value;
    this.props.handleTextChange(inputText);
  };

  render() {
    const { closeModal, scales, text, handleFormSubmit, isSending, t } =
      this.props;
    const {
      paintedSatisfactionStars,
      paintedDifficultyStars,
      paintedBenefitStars,
    } = this.state;
    const { theme, setTheme } = this.context;

    return (
      <div>
        <StyledSubHeading>
          {t(`courseInfo.Add review to this course`)}
        </StyledSubHeading>

        {isSending ? (
          <LoadingSpinner message={"Posting your review..."} />
        ) : (
          <StyledForm
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <FieldLegend horizontal isDark={theme === "dark"}>{t(`courseInfo.Scales`)}</FieldLegend>
            <ScalesList>
              <Scale size="tiny">
                <Stars>
                  {this.displayStars(
                    "satisfaction",
                    scales.satisfaction,
                    paintedSatisfactionStars
                  )}
                </Stars>
                <Statistic.Label>
                  <p className="dark:text-dark-text1">{t(`courseInfo.Satisfaction`)}</p>
                </Statistic.Label>
              </Scale>
              <Scale size="tiny">
                <Statistic.Value>
                  {this.displayStars(
                    "difficulty",
                    scales.difficulty,
                    paintedDifficultyStars
                  )}
                </Statistic.Value>
                <Statistic.Label>
                  <p className="dark:text-dark-text1">{t(`courseInfo.Difficulty`)}</p>
                </Statistic.Label>
              </Scale>
              <Scale size="tiny">
                <Statistic.Value>
                  {this.displayStars(
                    "benefit",
                    scales.benefit,
                    paintedBenefitStars
                  )}
                </Statistic.Value>
                <Statistic.Label>
                  <p className="dark:text-dark-text1">{t(`courseInfo.Benefit`)}</p>
                </Statistic.Label>
              </Scale>
            </ScalesList>
            <br />

            <FieldLegend horizontal isDark={theme === "dark"}>{t(`courseInfo.Review`)}</FieldLegend>
            <StyledTextarea
              placeholder={t(`courseInfo.Review placeholder`)}
              onChange={this.handleTextareaChange}
              value={text}
              className="bg-light-bgSide dark:bg-dark-text3"
            />

            <FormActions>
              <SubmitFormButton onClick={handleFormSubmit}>
                <FontAwesomeIcon icon={faCheck} /> {t(`courseInfo.Submit`)}
              </SubmitFormButton>
              <CloseFormButton onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} /> {t(`courseInfo.Close`)}
              </CloseFormButton>
            </FormActions>
          </StyledForm>
        )}
      </div>
    );
  }
}

export default withTranslation("translation")(AddReviewForm);
