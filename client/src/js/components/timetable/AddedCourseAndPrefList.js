import React from 'react';

import CourseListSummary from '../CourseListSummary';
import AddedCourseAndPrefItem from '../../containers/timetable/AddedCourseAndPrefItem';
import { Wrapper } from '../../styled-components/Wrapper';
import { media } from '../../utils/styledComponents';
import { UnstyledUList } from '../../styled-components/List';

const ExtendedWrapper = Wrapper.extend`
  ${media.tablet`margin-top: 2em;`};
  ${media.phone`margin-top: 2em;`};
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
      <CourseListSummary
        courses={addedCoursesAndPrefs}
        isSortingOptionOpen={isSortingOptionOpen}
        handleToggleSortingOptions={handleToggleSortingOptions}
        selectedSortingOption={selectedSortingOption}
        handleChangeSortingOption={handleChangeSortingOption}
      />
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
