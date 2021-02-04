import React from "react";
import styled from "styled-components";
import { RowWrapper } from "@bit/wasedatime.core.ts.ui.wrapper";
import { InvisibleButton } from "@bit/wasedatime.core.ts.ui.button";

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

const sortingOptions = [
  { value: "added_order", label: "Added order" },
  { value: "course_title", label: "Course title" },
]

type Props = {
  selectedSortingOptionValue: string;
  handleChangeSortingOption: (x: string) => void;
};

const SortingOptions = ({
  selectedSortingOptionValue,
  handleChangeSortingOption,
}: Props) => {
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
