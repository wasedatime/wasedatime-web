import React from "react";
import styled from "styled-components";
import { RowWrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { InvisibleButton } from "@bit/wasedatime.core.ts.styles.button";
import { Label, Dropdown } from "semantic-ui-react";
import { SyllabusKey } from "@bit/wasedatime.syllabus.ts.constants.syllabus-data";

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
        ? courseAndPref.course[SyllabusKey.CREDIT]
        : courseAndPref[SyllabusKey.CREDIT]
    )
    .reduce((a, b) => a + b, 0);
};

// Example value of sortingOptions:
// [
//   {
//     key: "added_order",
//     text: "Added order",
//     value: "added_order",
//   },
//   {
//     key: "course title",
//     text: "Course title",
//     value: "course title",
//   },
// ];

type Props = {
  courses: any[];
  sortingOptions: any[];
  selectedSortingOption: string;
  handleChangeSortingOption: (x: string) => void;
  dropdownPlaceholder: string;
  courseUnit: string;
  creditUnit: string;
};

const CourseListSummary = ({
  courses,
  sortingOptions,
  selectedSortingOption,
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
