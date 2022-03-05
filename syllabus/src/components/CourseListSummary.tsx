import React from "react";

import { RowWrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WithTranslation, withTranslation } from "react-i18next";
import Label from "semantic-ui-react/dist/commonjs/elements/Label";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown";
import styled from "styled-components";

import { InvisibleButton } from "@app/components/styles/Button";
import SortingOption from "@app/constants/sorting-options";
import { SyllabusKey } from "@app/constants/syllabus-data";
import Course from "@app/types/course";

type SortByButtonProps = {
  isSortingOptionOpen: boolean;
}

const SortByButton = styled(InvisibleButton)<SortByButtonProps>`
  margin-left: auto;
  display: flex;
  &:hover {
    fill: #b51e36;
    color: #b51e36;
  }
  &:focus {
    fill: ${(props) => (props.isSortingOptionOpen ? "#b51e36;" : "#000;")};
    color: ${(props) => (props.isSortingOptionOpen ? "#b51e36;" : "#000;")};
  }
  fill: ${(props) => (props.isSortingOptionOpen ? "#b51e36;" : "#000;")};
  color: ${(props) => (props.isSortingOptionOpen ? "#b51e36;" : "#000;")};
`;

const StyledLabel = styled(Label)`
  height: 30px;
  padding: 0.5em !important;
`;

const SortingIcon = styled(FontAwesomeIcon)`
  margin: auto;
  margin-right: 0.5em;
`;

const StyledDropdown = styled(Dropdown)`
  font-family: Segoe UI, Yu Gothic Medium, Lato;
  font-display: swap;
  height: 30px;
  padding: 0.5em !important;
  min-height: 2em !important;
  min-width: 40% !important;

  .divider.text + i.dropdown.icon {
    padding: 0.6rem;
  }
`;

const creditSum = (courses) => {
  return courses
    .map((course) => course[SyllabusKey.CREDIT])
    .reduce((a, b) => a + b, 0);
};

interface Props extends WithTranslation {
  courses: Course[];
  selectedSortingOption: string;
  changeSortingOption: (x: string) => void;
}

const CourseListSummary = ({
  courses,
  selectedSortingOption,
  changeSortingOption,
  t,
}: Props) => {
  const sortingOptions = [
    {
      key: SortingOption.ADDED_ORDER,
      text: t("syllabus.Added order"),
      value: SortingOption.ADDED_ORDER,
    },
    {
      key: SortingOption.COURSE_TITLE,
      text: t("syllabus.Course title"),
      value: SortingOption.COURSE_TITLE,
    },
    {
      key: SortingOption.COURSE_TIME,
      text: t("syllabus.Course time"),
      value: SortingOption.COURSE_TIME,
    },
  ];

  return (
    <div style={{ marginBottom: "1rem" }}>
      <RowWrapper>
        <StyledLabel size="big" color="grey" basic>
          {`${courses.length}`} {t("timetable.courses")}
        </StyledLabel>
        <StyledLabel size="big" color="grey" basic>
          {creditSum(courses)} {t("timetable.credits")}
        </StyledLabel>
        <SortingIcon icon={faSortAmountDown} />{" "}
        <StyledDropdown
          placeholder="Sort by"
          selection
          options={sortingOptions}
          value={selectedSortingOption}
          onChange={(e, data) => {
            changeSortingOption(data.value);
          }}
          aria-label="Sort added courses"
        />
      </RowWrapper>
    </div>
  );
};

export default withTranslation("translation")(CourseListSummary);
