import React from "react";
import styled from "styled-components";
import { SortingOptions } from "@bit/wasedatime.syllabus.js.ui.sorting-options";
import { Wrapper } from "@bit/wasedatime.core.js.ui.wrapper";
import { Button } from "@bit/wasedatime.core.js.ui.button";
import { Label, Dropdown } from "semantic-ui-react";
import SYLLABUS_KEYS from "@bit/wasedatime.syllabus.js.constants.syllabus-keys";

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

const CourseListSummary = ({
  courses,
  sortingOptions,
  isSortingOptionOpen,
  handleToggleSortingOptions,
  selectedSortingOption,
  handleChangeSortingOption,
  courseUnit,
  creditUnit,
}) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <RowWrapper>
        <StyledLabel size="big" color="grey" basic>
          {`${courses.length}`} courseUnit{" "}
        </StyledLabel>
        <StyledLabel size="big" color="grey" basic>
          {creditSum(courses)} creditUnit
        </StyledLabel>

        <StyledDropdown
          placeholder={t("timetable.Sort by")}
          selection
          options={sortingOptions(t)}
          onChange={(e, data) => {
            handleChangeSortingOption(data.value);
          }}
        />
      </RowWrapper>
      {isSortingOptionOpen && (
        <SortingOptions
          selectedSortingOption={selectedSortingOption}
          handleChangeSortingOption={handleChangeSortingOption}
        />
      )}
    </div>
  );
};

export default CourseListSummary;
