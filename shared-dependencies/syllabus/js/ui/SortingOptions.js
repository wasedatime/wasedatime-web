import React from "react";
import styled from "styled-components";
import { Wrapper } from "@bit/wasedatime.core.js.ui.wrapper";
import { Button } from "@bit/wasedatime.core.js.ui.button";

const ExtendedRowWrapper = styled(RowWrapper)`
  padding: 0.3em 0;
  justify-content: space-between;
`;

const ExtendedInvisibleButton = styled(InvisibleButton)`
  &:hover {
    fill: #b51e36;
    color: #b51e36;
  }
  &:focus {
    fill: ${(props) => (props.isClicked ? "#b51e36;" : "#000;")};
    color: ${(props) => (props.isClicked ? "#b51e36;" : "#000;")};
  }
  fill: ${(props) => (props.isClicked ? "#b51e36;" : "#000;")};
  color: ${(props) => (props.isClicked ? "#b51e36;" : "#000;")};
`;

// Example value of sortingOptions:
// [
//   { value: "added_order", label: "Added order" },
//   { value: "course_title", label: "Course title" },
// ]

const SortingOptions = ({
  sortingOptions,
  selectedSortingOptionValue,
  handleChangeSortingOption,
}) => {
  return (
    <ExtendedRowWrapper>
      {sortingOptions.map((sortingOption) => {
        const sortingOptionValue = sortingOption.value;
        return (
          <ExtendedInvisibleButton
            key={sortingOptionValue}
            isClicked={sortingOptionValue === selectedSortingOptionValue}
            onClick={(event) => {
              event.preventDefault();
              handleChangeSortingOption(sortingOptionValue);
            }}
          >
            {sortingOption.label}
          </ExtendedInvisibleButton>
        );
      })}
    </ExtendedRowWrapper>
  );
};

export default SortingOptions;
