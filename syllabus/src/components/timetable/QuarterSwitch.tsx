import React from "react";

import colors from "@bit/wasedatime.core.theme.colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faSpa,
  faSun,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
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

const buttonStyle = {
  marginBottom: "1em",
  padding: "0px 1em",
  width: "60px",
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

  const QuarterButton = ({
    quarter,
    icon,
  }: {
    quarter: string;
    icon: IconProp;
  }) => {
    const className = `border-2 rounded border-quarter-light-${quarter} text-quarter-light-${quarter} hover:bg-quarter-light-${quarter} hover:text-light-bgMain dark:border-quarter-dark-${quarter} dark:text-quarter-dark-${quarter} dark:hover:bg-quarter-dark-${quarter} dark:hover:text-dark-bgMain`;

    return (
      <button
        onClick={() => toggleQuarter(Quarter[quarter.toUpperCase()])}
        style={buttonStyle}
        className={className}
      >
        {selectedQuarter === Quarter[quarter.toUpperCase()] && (
          <FontAwesomeIcon icon={faCheck} />
        )}{" "}
        <FontAwesomeIcon icon={icon} />
      </button>
    );
  };

  return semesterKey === Semester.SPRING ? (
    <Button.Group>
      <QuarterButton quarter="spring" icon={faSpa} />
      <OrButton isDark={theme === "dark"} />
      <QuarterButton quarter="summer" icon={faSun} />
    </Button.Group>
  ) : (
    <Button.Group>
      <QuarterButton quarter="fall" icon={faCanadianMapleLeaf} />
      <OrButton isDark={theme === "dark"} />
      <QuarterButton quarter="winter" icon={faSnowflake} />
    </Button.Group>
  );
};

export default withTranslation("translation")(QuarterSwitch);
