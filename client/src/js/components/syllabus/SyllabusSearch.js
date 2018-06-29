import React from 'react';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

import AddedCourseList from './AddedCourseList';
import CourseListContainer from '../../containers/syllabus/CourseListContainer';
import { RowWrapper } from '../../styled-components/Wrapper';
import { sizes } from '../../utils/styledComponents';

const SideBar = styled('div')`
  flex: 0 0 19em;
  background-color: white;
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
                <AddedCourseList />
              </SideBar>
          )}
        </MediaQuery>
        <CourseListContainer/>
      </RowWrapper>
    );
  }
};

export default SyllabusSearch;
