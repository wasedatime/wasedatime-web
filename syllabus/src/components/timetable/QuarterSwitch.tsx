import React from "react";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WithTranslation, withTranslation } from "react-i18next";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import styled from "styled-components";
import { ThemeContext } from "../../utils/theme-context";

import { Semester, Quarter } from "@app/constants/timetable-terms";

const OrButton = styled(Button.Or)`
  height: 24px;
  &:before {
    color: #777 !important;
  }
`;

interface Props extends WithTranslation {
  semesterKey: string;
  selectedQuarter: string;
  toggleQuarter: (quarter: string) => void;
}

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
      <Button
        inverted
        color="pink"
        onClick={() => toggleQuarter(Quarter.SPRING)}
        style={buttonStyle}
      >
        {selectedQuarter === Quarter.SPRING && (
          <FontAwesomeIcon icon={faCheck} />
        )}{" "}
        {t("syllabus.semesterMap.Spring")}
      </Button>
      <OrButton />
      <Button
        inverted
        color="orange"
        onClick={() => toggleQuarter(Quarter.SUMMER)}
        style={buttonStyle}
      >
        {selectedQuarter === Quarter.SUMMER && (
          <FontAwesomeIcon icon={faCheck} />
        )}{" "}
        {t("syllabus.semesterMap.Summer")}
      </Button>
    </Button.Group>
  ) : (
    <Button.Group>
      <Button
        inverted
        color="brown"
        onClick={() => toggleQuarter(Quarter.FALL)}
        style={buttonStyle}
      >
        {selectedQuarter === Quarter.FALL && <FontAwesomeIcon icon={faCheck} />}{" "}
        {t("syllabus.semesterMap.Fall")}
      </Button>
      <OrButton />
      <Button
        inverted
        color="blue"
        onClick={() => toggleQuarter(Quarter.WINTER)}
        style={buttonStyle}
      >
        {selectedQuarter === Quarter.WINTER && (
          <FontAwesomeIcon icon={faCheck} />
        )}{" "}
        {t("syllabus.semesterMap.Winter")}
      </Button>
    </Button.Group>
  );
};

export default withTranslation("translation")(QuarterSwitch);
