import React from "react";
import styled from "styled-components";

import SortingOptions from "./SortingOptions";
import { RowWrapper } from "../styled-components/Wrapper";
import { InvisibleButton } from "../styled-components/Button";
import { withNamespaces } from "react-i18next";
import { Label } from "semantic-ui-react";
import { SYLLABUS_KEYS } from "../config/syllabusKeys";
import PropTypes from "prop-types";

const CourseAddedMessageWrapper = styled(RowWrapper)`
  // justify-content: space-between;
`;

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

const creditSum = (coursesAndPrefs) => {
  return coursesAndPrefs
    .map((courseAndPref) =>
      courseAndPref.course
        ? courseAndPref.course[SYLLABUS_KEYS.CREDIT]
        : courseAndPref[SYLLABUS_KEYS.CREDIT]
    )
    .reduce((a, b) => a + b, 0);
};

const CourseListSummary = ({
  courses,
  isSortingOptionOpen,
  handleToggleSortingOptions,
  selectedSortingOption,
  handleChangeSortingOption,
  t,
}) => {
  return (
    <div>
      <CourseAddedMessageWrapper>
        <Label size="big" color="grey" basic>
          {`${courses.length}`} {t("timetable.courses added")}{" "}
        </Label>
        <Label size="big" color="grey" basic>
          {creditSum(courses)} Credits
        </Label>
        <SortByButton
          isSortingOptionOpen={isSortingOptionOpen}
          onClick={handleToggleSortingOptions}
        >
          <span>{t("timetable.Sort by")}&nbsp;</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
          </svg>
        </SortByButton>
      </CourseAddedMessageWrapper>
      {isSortingOptionOpen && (
        <SortingOptions
          selectedSortingOption={selectedSortingOption}
          handleChangeSortingOption={handleChangeSortingOption}
        />
      )}
    </div>
  );
};

export default withNamespaces("translation")(CourseListSummary);

CourseListSummary.propTypes = {
  courses: PropTypes.array.isRequired,
  isSortingOptionOpen: PropTypes.bool.isRequired,
  handleToggleSortingOptions: PropTypes.func.isRequired,
  selectedSortingOption: PropTypes.string.isRequired,
  handleChangeSortingOption: PropTypes.func.isRequired,
};

SortByButton.propTypes = {
  isSortingOptionOpen: PropTypes.bool.isRequired,
};
