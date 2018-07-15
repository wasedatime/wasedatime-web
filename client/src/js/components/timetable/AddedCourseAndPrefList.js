import React from 'react';

import AddedCourseAndPrefItem from '../../containers/timetable/AddedCourseAndPrefItem';
import { Wrapper } from '../../styled-components/Wrapper';
import { UnstyledUList } from '../../styled-components/List';

const ExtendedUnstyledUList = UnstyledUList.extend`
  margin-top: 2em;
  font-size: 14px;
`

const AddedCourseAndPrefList = ({addedCoursesAndPrefs}) => {
  return (
    <Wrapper>
      <ExtendedUnstyledUList>
        {addedCoursesAndPrefs.map(addedCourseAndPref => (
          <AddedCourseAndPrefItem
            key={addedCourseAndPref.id}
            addedCourseAndPref={addedCourseAndPref}
          />
        ))
        }
      </ExtendedUnstyledUList>
    </Wrapper>
  )
}

export default AddedCourseAndPrefList;
