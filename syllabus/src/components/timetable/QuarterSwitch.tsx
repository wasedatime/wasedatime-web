import React from "react";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WithTranslation, withTranslation } from "react-i18next";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import styled from "styled-components";
import { ThemeContext } from "@app/utils/theme-context";

import { Semester, Quarter } from "@app/constants/timetable-terms";

interface Props extends WithTranslation {
  semesterKey: string;
  selectedQuarter: string;
  toggleQuarter: (quarter: string) => void;
}

const OrButton = styled(Button.Or)`
  height: 24px;
  &:before {
    color: #777 !important;
  }
`;

const StyledButton = styled(Button)`
  ${props => props.theme === "dark" && "opacity: 0.7;"}
`;

const buttonStyle = {
  marginBottom: "1em",
  padding: "0px 1em",
  width: "85px",
  height: "24px",
  fontSize: "12px",
};

const QuarterSwitch = ({
  semesterKey,
  selectedQuarter,
  toggleQuarter,
  t,
}: Props) => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  
  return semesterKey === Semester.SPRING ? (
    <Button.Group>
      <StyledButton
        inverted
        color="pink"
        onClick={() => toggleQuarter(Quarter.SPRING)}
        style={buttonStyle}
        theme={theme}
      >
        {selectedQuarter === Quarter.SPRING && (
          <FontAwesomeIcon icon={faCheck} />
        )}{" "}
        {t("syllabus.semesterMap.Spring")}
      </StyledButton>
      <OrButton />
      <StyledButton
        inverted
        color="orange"
        onClick={() => toggleQuarter(Quarter.SUMMER)}
        style={buttonStyle}
        theme={theme}
      >
        {selectedQuarter === Quarter.SUMMER && (
          <FontAwesomeIcon icon={faCheck} />
        )}{" "}
        {t("syllabus.semesterMap.Summer")}
      </StyledButton>
    </Button.Group>
  ) : (
    <Button.Group>
      <StyledButton
        inverted
        color="brown"
        onClick={() => toggleQuarter(Quarter.FALL)}
        style={buttonStyle}
        theme={theme}
      >
        {selectedQuarter === Quarter.FALL && <FontAwesomeIcon icon={faCheck} />}{" "}
        {t("syllabus.semesterMap.Fall")}
      </StyledButton>
      <OrButton />
      <StyledButton
        inverted
        color="blue"
        onClick={() => toggleQuarter(Quarter.WINTER)}
        style={buttonStyle}
        theme={theme}
      >
        {selectedQuarter === Quarter.WINTER && (
          <FontAwesomeIcon icon={faCheck} />
        )}{" "}
        {t("syllabus.semesterMap.Winter")}
      </StyledButton>
    </Button.Group>
  );
};

export default withTranslation("translation")(QuarterSwitch);
