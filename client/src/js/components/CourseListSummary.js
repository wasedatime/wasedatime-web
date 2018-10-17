import React from 'react';
import styled from 'styled-components';

import SortingOptions from './SortingOptions';
import { RowWrapper } from '../styled-components/Wrapper';
import { InvisibleButton } from '../styled-components/Button';

const CourseAddedMessageWrapper = styled(RowWrapper)`
  justify-content: space-between;
`;

const SortByButton = styled(InvisibleButton)`
  display: flex;
  &:hover {
    fill: #b51e36;
    color: #b51e36;
  }
  &:focus {
    fill: ${props => (props.isSortingOptionOpen ? '#b51e36;' : '#000;')};
    color: ${props => (props.isSortingOptionOpen ? '#b51e36;' : '#000;')};
  }
  fill: ${props => (props.isSortingOptionOpen ? '#b51e36;' : '#000;')};
  color: ${props => (props.isSortingOptionOpen ? '#b51e36;' : '#000;')};
`;

const CourseListSummary = ({
  courses,
  isSortingOptionOpen,
  handleToggleSortingOptions,
  selectedSortingOption,
  handleChangeSortingOption
}) => {
  return (
    <div>
      <CourseAddedMessageWrapper>
        <span>{`${courses.length} courses added `}</span>
        <SortByButton
          isSortingOptionOpen={isSortingOptionOpen}
          onClick={handleToggleSortingOptions}
        >
          <span>Sort by&nbsp;</span>
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

export default CourseListSummary;
