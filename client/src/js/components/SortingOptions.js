import React from 'react';
import styled from 'styled-components';

import { ADDED_ORDER, COURSE_TITLE, COURSE_TIME } from '../data/sortingOptions';
import { RowWrapper } from '../styled-components/Wrapper';
import { InvisibleButton } from '../styled-components/Button';

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
    fill: ${props => (props.isClicked ? '#b51e36;' : '#000;')};
    color: ${props => (props.isClicked ? '#b51e36;' : '#000;')};
  }
  fill: ${props => (props.isClicked ? '#b51e36;' : '#000;')};
  color: ${props => (props.isClicked ? '#b51e36;' : '#000;')};
`;

const SortingOptions = ({
  selectedSortingOption,
  handleChangeSortingOption
}) => {
  const sortingOptions = [
    { value: ADDED_ORDER, label: 'Added order' },
    { value: COURSE_TITLE, label: 'Course title' },
    { value: COURSE_TIME, label: 'Course time' }
  ];
  return (
    <ExtendedRowWrapper>
      {sortingOptions.map(sortingOption => {
        const sortingOptionValue = sortingOption.value;
        return (
          <ExtendedInvisibleButton
            key={sortingOptionValue}
            isClicked={sortingOptionValue === selectedSortingOption}
            onClick={event => {
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
