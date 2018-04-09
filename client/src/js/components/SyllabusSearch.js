import React from 'react';
import { Helmet } from 'react-helmet';

import SyllabusSearchBar from '../containers/SyllabusSearchBar';
import CourseListContainer from '../containers/CourseListContainer';
import { Wrapper } from '../styled-components/Wrapper';

const SyllabusSearch = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>WaseTime - Syllabus Search</title>
        <meta name="description" content="Syllabus Searching at Waseda University." />
        <meta property="og:title" content="WaseTime - Syllabus Search" />
        <meta property="og:description" content="Syllabus Searching at Waseda University." />
        <meta property="og:site_name" content="WaseTime - Syllabus Search" />
      </Helmet>
      <SyllabusSearchBar />
      <CourseListContainer />
    </Wrapper>
  );
};

export default SyllabusSearch;
