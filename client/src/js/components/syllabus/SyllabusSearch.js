import React from 'react';
import MediaQuery from 'react-responsive';

import AddedCourseListContainer from '../../containers/syllabus/AddedCourseListContainer';
import FetchedCourseListSearch from '../../containers/syllabus/FetchedCourseListSearch';
import { RowWrapper } from '../../styled-components/Wrapper';
import { SideBar } from '../../styled-components/SideBar';
import { sizes } from '../../utils/styledComponents';
import withFetchCourses from '../../hocs/withFetchCourses';

const ExtendedRowWrapper = RowWrapper.extend`
  flex: 1 0 0;
`;

const SyllabusSearch = props => {
  const { addedCourses, fetchedCourses } = props;
  return (
    <ExtendedRowWrapper>
      <MediaQuery minWidth={sizes.tablet}>
        {matches =>
          matches && (
            <SideBar flexBasis="21em">
              <AddedCourseListContainer addedCourses={addedCourses} />
            </SideBar>
          )
        }
      </MediaQuery>
      <FetchedCourseListSearch fetchedCourses={fetchedCourses} />
    </ExtendedRowWrapper>
  );
};

export default withFetchCourses(SyllabusSearch);
