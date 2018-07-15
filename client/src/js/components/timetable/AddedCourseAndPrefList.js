import React from 'react';

import AddedCourseAndPrefItem from '../../containers/timetable/AddedCourseAndPrefItem';
import { Wrapper } from '../../styled-components/Wrapper';


const AddedCourseAndPrefList = ({addedCoursesAndPrefs}) => {
  return (
    <Wrapper>
      {addedCoursesAndPrefs.map(addedCourseAndPref => (
        <AddedCourseAndPrefItem
          key={addedCourseAndPref.id}
          addedCourseAndPref={addedCourseAndPref}
        />
      ))
      }
    </Wrapper>
  )
}

export default AddedCourseAndPrefList;
