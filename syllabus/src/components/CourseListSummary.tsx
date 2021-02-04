import React from "react";
import styled from "styled-components";
import { RowWrapper } from "@bit/wasedatime.core.ts.ui.wrapper";
import { InvisibleButton } from "@bit/wasedatime.core.ts.ui.button";
import { Label, Dropdown } from "semantic-ui-react";
import SYLLABUS_KEYS from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";

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

const StyledDropdown = styled(Dropdown)`
  font-size: 1.4rem !important;
  font-family: Segoe UI, Yu Gothic Medium, Lato;
  font-display: swap;
  height: 2em !important;
  min-height: 2em !important;
  width: 40% !important;
  min-width: 40% !important;
  padding: 0.6rem !important;
  margin-left: auto;

  i {
    padding: 0.6rem !important;
  }
`;

const creditSum = (coursesAndPrefs) => {
  return coursesAndPrefs
    .map((courseAndPref) =>
      courseAndPref.course
        ? courseAndPref.course[SYLLABUS_KEYS.CREDIT]
        : courseAndPref[SYLLABUS_KEYS.CREDIT]
    )
    .reduce((a, b) => a + b, 0);
};

// Example value of sortingOptions:
// todo use enum
const sortingOptions = [
  {
    key: "ADDED_ORDER",
    text: "Added order",
    value: "ADDED_ORDER",
  },
  {
    key: "COURSE_TITLE",
    text: "Course title",
    value: "COURSE_TITLE",
  },
  {
    key: "COURSE_TIME",
    text: "Course time",
    value: "COURSE_TIME",
  },
];

type Props = {
  courses: any[];
  handleChangeSortingOption: (x: string) => void;
  dropdownPlaceholder: string;
  courseUnit: string;
  creditUnit: string;
};

const CourseListSummary = ({
  courses,
  handleChangeSortingOption,
  dropdownPlaceholder,
  courseUnit,
  creditUnit,
}: Props) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <RowWrapper>
        <StyledLabel size="big" color="grey" basic>
          {`${courses.length}`} {courseUnit}{" "}
        </StyledLabel>
        <StyledLabel size="big" color="grey" basic>
          {creditSum(courses)} {creditUnit}
        </StyledLabel>

        <StyledDropdown
          placeholder={dropdownPlaceholder}
          selection
          options={sortingOptions}
          onChange={(e, data) => {
            handleChangeSortingOption(data.value);
          }}
        />
      </RowWrapper>
    </div>
  );
};

export default CourseListSummary;
