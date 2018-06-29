import React from 'react';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

import AddedCourseListContainer from '../../containers/syllabus/AddedCourseListContainer';
import CourseListContainer from '../../containers/syllabus/CourseListContainer';
import { RowWrapper } from '../../styled-components/Wrapper';
import { sizes } from '../../utils/styledComponents';

const SideBar = styled('div')`
  display: flex;
  flex: 0 0 21em;
  background-color: rgba(0,0,0,0.2);
`

class SyllabusSearch extends React.Component {
  render() {
    return (
      <RowWrapper>
        <Helmet>
          <title>WaseTime - Syllabus Search</title>
          <meta name="description" content="Syllabus Searching at Waseda University." />
          <meta property="og:title" content="WaseTime - Syllabus Search" />
          <meta property="og:description" content="Syllabus Searching at Waseda University." />
          <meta property="og:site_name" content="WaseTime - Syllabus Search" />
        </Helmet>
        <MediaQuery minWidth={sizes.tablet}>
          {matches => (
            matches &&
              <SideBar>
                <AddedCourseListContainer />
              </SideBar>
          )}
        </MediaQuery>
        <CourseListContainer/>
      </RowWrapper>
    );
  }
};

export default SyllabusSearch;
