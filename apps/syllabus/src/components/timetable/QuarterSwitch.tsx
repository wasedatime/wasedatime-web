import React from "react"

import { Colors } from "wasedatime-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {
  faCheck,
  faSpa,
  faSun,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons"
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons"
import { WithTranslation, withTranslation } from "react-i18next"
import Button from "semantic-ui-react/dist/commonjs/elements/Button"
import styled from "styled-components"

import { Semester, Quarter } from "@app/constants/timetable-terms"
import { ThemeContext } from "@app/utils/theme-context"

interface Props extends WithTranslation {
  semesterKey: string
  selectedQuarter: string
  toggleQuarter: (quarter: string) => void
}

type ButtonProps = {
  $isDark: boolean
}

const OrButton = styled(Button.Or)<ButtonProps>`
  height: 24px;
  &:before {
    background-color: ${(props) =>
      props.$isDark ? colors.dark.bgSide : colors.light.bgSide} !important;
    color: ${(props) =>
      props.$isDark ? colors.dark.text2 : colors.light.text2} !important;
  }
`

const buttonStyle = {
  marginBottom: "1em",
  padding: "0px 1em",
  width: "60px",
  height: "24px",
  fontSize: "12px",
}

const QuarterSwitch = ({
  semesterKey,
  selectedQuarter,
  toggleQuarter,
  t,
}: Props) => {
  const { theme } = React.useContext(ThemeContext)

  return semesterKey === Semester.SPRING ? (
    <Button.Group>
      <button
        onClick={() => toggleQuarter(Quarter.SPRING)}
        style={buttonStyle}
        className="rounded border-2 border-quarter-light-spring text-quarter-light-spring hover:bg-quarter-light-spring hover:text-light-bgMain dark:border-quarter-dark-spring dark:text-quarter-dark-spring dark:hover:bg-quarter-dark-spring dark:hover:text-dark-bgMain"
      >
        {selectedQuarter === Quarter.SPRING && (
          <FontAwesomeIcon icon={faCheck} />
        )}{" "}
        <FontAwesomeIcon icon={faSpa} />
      </button>
      <OrButton $isDark={theme === "dark"} />
      <button
        onClick={() => toggleQuarter(Quarter.SUMMER)}
        style={buttonStyle}
        className="rounded border-2 border-quarter-light-summer text-quarter-light-summer hover:bg-quarter-light-summer hover:text-light-bgMain dark:border-quarter-dark-summer dark:text-quarter-dark-summer dark:hover:bg-quarter-dark-summer dark:hover:text-dark-bgMain"
      >
        {selectedQuarter === Quarter.SUMMER && (
          <FontAwesomeIcon icon={faCheck} />
        )}{" "}
        <FontAwesomeIcon icon={faSun} />
      </button>
    </Button.Group>
  ) : (
    <Button.Group>
      <button
        onClick={() => toggleQuarter(Quarter.FALL)}
        style={buttonStyle}
        className="rounded border-2 border-quarter-light-fall text-quarter-light-fall hover:bg-quarter-light-fall hover:text-light-bgMain dark:border-quarter-dark-fall dark:text-quarter-dark-fall dark:hover:bg-quarter-dark-fall dark:hover:text-dark-bgMain"
      >
        {selectedQuarter === Quarter.FALL && <FontAwesomeIcon icon={faCheck} />}{" "}
        <FontAwesomeIcon icon={faCanadianMapleLeaf} />
      </button>
      <OrButton $isDark={theme === "dark"} />
      <button
        onClick={() => toggleQuarter(Quarter.WINTER)}
        style={buttonStyle}
        className="rounded border-2 border-quarter-light-winter text-quarter-light-winter hover:bg-quarter-light-winter hover:text-light-bgMain dark:border-quarter-dark-winter dark:text-quarter-dark-winter dark:hover:bg-quarter-dark-winter dark:hover:text-dark-bgMain"
      >
        {selectedQuarter === Quarter.WINTER && (
          <FontAwesomeIcon icon={faCheck} />
        )}{" "}
        <FontAwesomeIcon icon={faSnowflake} />
      </button>
    </Button.Group>
  )
}

export default withTranslation("translation")(QuarterSwitch)
