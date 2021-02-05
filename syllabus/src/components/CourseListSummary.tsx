import React from "react";
import styled from "styled-components";
import { WithTranslation, withTranslation } from "react-i18next";
import { RowWrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { InvisibleButton } from "@bit/wasedatime.core.ts.styles.button";
import { Label, Icon, Dropdown } from "semantic-ui-react";
import { SyllabusKey } from "@bit/wasedatime.syllabus.ts.constants.syllabus-data";
import SortingOption from "@bit/wasedatime.syllabus.ts.constants.sorting-options";
import Course from "../types/course";

const SortByButton = styled(InvisibleButton)`
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
  padding: 0.6rem !important;
`;

const SortingIcon = styled(Icon)`
  margin-left: auto !important;
`;

const StyledDropdown = styled(Dropdown)`
  font-size: 1.4rem !important;
  font-family: Segoe UI, Yu Gothic Medium, Lato;
  font-display: swap;
  min-height: 2em !important;
  min-width: 40% !important;
  padding: 0.6rem !important;

  .divider.text + i.dropdown.icon {
    padding: 0.6rem;
  }
`;

const creditSum = (coursesAndPrefs) => {
  return coursesAndPrefs
    .map((courseAndPref) =>
      courseAndPref.course
        ? courseAndPref.course[SyllabusKey.CREDIT]
        : courseAndPref[SyllabusKey.CREDIT]
    )
    .reduce((a, b) => a + b, 0);
};

const sortingOptions = [
  {
    key: SortingOption.ADDED_ORDER,
    text: "Added order",
    value: SortingOption.ADDED_ORDER,
  },
  {
    key: SortingOption.COURSE_TITLE,
    text: "Course title",
    value: SortingOption.COURSE_TITLE,
  },
  {
    key: SortingOption.COURSE_TIME,
    text: "Course time",
    value: SortingOption.COURSE_TIME,
  },
];

interface Props extends WithTranslation {
  courses: Course[];
  selectedSortingOption: string;
  changeSortingOption: (x: string) => void;
}

const CourseListSummary = ({
  courses,
  selectedSortingOption,
  changeSortingOption,
}: Props) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <RowWrapper>
        <StyledLabel size="big" color="grey" basic>
          {`${courses.length}`} courses
        </StyledLabel>
        <StyledLabel size="big" color="grey" basic>
          {creditSum(courses)} credits
        </StyledLabel>
        <SortingIcon name="sort content ascending" />
        <StyledDropdown
          placeholder={"Sort by"}
          selection
          options={sortingOptions}
          value={selectedSortingOption}
          onChange={(e, data) => {
            changeSortingOption(data.value);
          }}
        />
      </RowWrapper>
    </div>
  );
};

export default withTranslation("translation")(CourseListSummary);
