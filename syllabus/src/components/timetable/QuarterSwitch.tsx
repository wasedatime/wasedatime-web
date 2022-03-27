import React from "react";

import colors from "@bit/wasedatime.core.theme.colors";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WithTranslation, withTranslation } from "react-i18next";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import styled from "styled-components";

import { Semester, Quarter } from "@app/constants/timetable-terms";
import { ThemeContext } from "@app/utils/theme-context";

interface Props extends WithTranslation {
  semesterKey: string;
  selectedQuarter: string;
  toggleQuarter: (quarter: string) => void;
}

type ButtonProps = {
  isDark: boolean;
};

const OrButton = styled(Button.Or)<ButtonProps>`
  height: 24px;
  &:before {
    background-color: ${(props) =>
      props.isDark ? colors.dark.bgSide : colors.light.bgSide} !important;
    color: ${(props) =>
      props.isDark ? colors.dark.text2 : colors.light.text2} !important;
  }
`;

const StyledButton = styled(Button)<ButtonProps>`
  ${(props) => props.isDark && "opacity: 0.7;"}
`;

const buttonStyle = {
  marginBottom: "1em",
  padding: "0px 1em",
  width: "90px",
  height: "24px",
  fontSize: "12px",
};

const QuarterSwitch = ({
  semesterKey,
  selectedQuarter,
  toggleQuarter,
  t,
}: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return semesterKey === Semester.SPRING ? (
    <Button.Group>
      <StyledButton
        inverted
        color="pink"
        onClick={() => toggleQuarter(Quarter.SPRING)}
        style={buttonStyle}
        isDark={theme === "dark"}
      >
        {selectedQuarter === Quarter.SPRING && (
          <FontAwesomeIcon icon={faCheck} />
        )}{" "}
        {t("syllabus.semesterMap.Spring")}
      </StyledButton>
      <OrButton isDark={theme === "dark"} />
      <StyledButton
        inverted
        color="orange"
        onClick={() => toggleQuarter(Quarter.SUMMER)}
        style={buttonStyle}
        isDark={theme === "dark"}
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
        isDark={theme === "dark"}
      >
        {selectedQuarter === Quarter.FALL && <FontAwesomeIcon icon={faCheck} />}{" "}
        {t("syllabus.semesterMap.Fall")}
      </StyledButton>
      <OrButton isDark={theme === "dark"} />
      <StyledButton
        inverted
        color="blue"
        onClick={() => toggleQuarter(Quarter.WINTER)}
        style={buttonStyle}
        isDark={theme === "dark"}
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
