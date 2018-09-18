import React from 'react';

import AddedCourseAndPrefItem from '../../containers/timetable/AddedCourseAndPrefItem';
import SortingOptions from '../../components/SortingOptions';
import { Wrapper, RowWrapper } from '../../styled-components/Wrapper';
import { InvisibleButton } from '../../styled-components/Button';
import { media } from '../../utils/styledComponents';
import { UnstyledUList } from '../../styled-components/List';

const ExtendedWrapper = Wrapper.extend`
  ${media.tablet`margin-top: 2em;`};
  ${media.phone`margin-top: 2em;`};
`;

const CourseAddedMessageWrapper = RowWrapper.extend`
  padding: 0.3em 1em;
  ${media.tablet`padding: 0 1em;`};
  ${media.phone`padding: 0 1em;`};
  justify-content: space-between;
`;

const SortByButton = InvisibleButton.extend`
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

const ExtendedUnstyledUList = UnstyledUList.extend`
  font-size: 14px;
`;

const AddedCourseAndPrefList = ({
  addedCoursesAndPrefs,
  isSortingOptionOpen,
  handleToggleSortingOptions,
  selectedSortingOption,
  handleChangeSortingOption
}) => {
  return (
    <ExtendedWrapper>
      <CourseAddedMessageWrapper>
        <span>{`${addedCoursesAndPrefs.length} courses added `}</span>
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
      <Wrapper>
        <ExtendedUnstyledUList>
          {addedCoursesAndPrefs.map(addedCourseAndPref => (
            <AddedCourseAndPrefItem
              key={addedCourseAndPref.id}
              addedCourseAndPref={addedCourseAndPref}
            />
          ))}
        </ExtendedUnstyledUList>
      </Wrapper>
    </ExtendedWrapper>
  );
};

export default AddedCourseAndPrefList;
