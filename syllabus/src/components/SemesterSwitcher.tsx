import React from "react";

import { RowWrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { media, sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import { InvisibleButton } from "@app/components/styles/Button";
import QuarterSwitch from "@app/components/timetable/QuarterSwitch";

type ExtendedInvisibleButtonProps = {
  small: boolean;
}

type SemesterTitleProps = {
  small: boolean;
}

type ExtendedRowWrapperProps = {
  small: boolean;
}

const ExtendedRowWrapper = styled(RowWrapper)<ExtendedRowWrapperProps>`
  flex: none;
  justify-content: center;
  font-size: 1.3em;
  ${(props) => props.small && "font-size: 1em;"}
  padding: 0.3em;
`;

const ExtendedInvisibleButton = styled(InvisibleButton)<ExtendedInvisibleButtonProps>`
  max-width: 50px;
  color: #000;
  &:hover {
    color: #b51e36;
  }
  &:active {
    color: #000;
  }
  ${media.tablet`
    &:focus {
        color: #000;
    }`};
  ${media.phone`
    &:focus {
      color: #000;
    }
  `};
  ${(props) => props.small && "margin: 0px 25px;"}
`;

const SemesterTitle = styled.div<SemesterTitleProps>`
  width: 300px;
  ${(props) => props.small && "width: 200px;"}
  text-align: center;
`;

interface Props {
  semesterTitle: string;
  selectedSemester: string;
  selectedQuarter: string | null;
  isQuarterDisplayed: boolean;
  toggleSemester: () => void;
  toggleQuarter: (quarter: string) => void;
  isSmallSize: boolean;
}

const SemesterSwitcher = ({
  semesterTitle,
  selectedSemester,
  selectedQuarter,
  isQuarterDisplayed,
  toggleSemester,
  toggleQuarter,
  isSmallSize,
}: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ExtendedRowWrapper small={isSmallSize}>
        <ExtendedInvisibleButton
          onClick={() => toggleSemester()}
          aria-label="Semester toggle"
          small={isSmallSize}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} size="1x" />
        </ExtendedInvisibleButton>
        <SemesterTitle small={isSmallSize}>{semesterTitle}</SemesterTitle>
        <ExtendedInvisibleButton
          onClick={toggleSemester}
          aria-label="Semester toggle"
          small={isSmallSize}
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} size="1x" />
        </ExtendedInvisibleButton>
        <MediaQuery minWidth={sizes.tablet + 1}>
          {(matches) =>
            matches &&
            isQuarterDisplayed && (
              <div style={{ marginLeft: "5vw" }}>
                <QuarterSwitch
                  semesterKey={selectedSemester}
                  selectedQuarter={selectedQuarter}
                  toggleQuarter={toggleQuarter}
                />
              </div>
            )
          }
        </MediaQuery>
      </ExtendedRowWrapper>
      <MediaQuery maxWidth={sizes.tablet}>
        {(matches) =>
          matches &&
          isQuarterDisplayed && (
            <div style={{ textAlign: "center" }}>
              <QuarterSwitch
                semesterKey={selectedSemester}
                selectedQuarter={selectedQuarter}
                toggleQuarter={toggleQuarter}
              />
            </div>
          )
        }
      </MediaQuery>
    </div>
  );
};

export default SemesterSwitcher;
