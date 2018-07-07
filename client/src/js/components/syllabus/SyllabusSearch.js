import React from 'react';
import MediaQuery from 'react-responsive';

import AddedCourseSearch from '../../containers/syllabus/AddedCourseSearch';
import FetchedCourseSearch from '../../containers/syllabus/FetchedCourseSearch';
import { RowWrapper } from '../../styled-components/Wrapper';
import { SideBar } from '../../styled-components/SideBar';
import { sizes } from '../../utils/styledComponents';
import withFetchCourses from '../../hocs/withFetchCourses';

const ExtendedRowWrapper = RowWrapper.extend`
  flex: 1 0 0;
`

const SyllabusSearch = props => {
  const { addedCourses, fetchedCourses } = props;
  return (
    <ExtendedRowWrapper>
      <MediaQuery minWidth={sizes.tablet}>
        {matches => (
          matches &&
            <SideBar flexBasis="21em">
              <AddedCourseSearch addedCourses={addedCourses}/>
            </SideBar>
        )}
      </MediaQuery>
      <FetchedCourseSearch fetchedCourses={fetchedCourses}/>
    </ExtendedRowWrapper>
  )
}


export default withFetchCourses(SyllabusSearch);
