import React from 'react';
import styled from 'styled-components';

import SyllabusSearchBar from '../containers/SyllabusSearchBar';
import CourseListContainer from '../containers/CourseListContainer';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const SyllabusSearch = () => {
  return (
    <Wrapper>
      <SyllabusSearchBar />
      <CourseListContainer />
    </Wrapper>
  );
};

export default SyllabusSearch;
