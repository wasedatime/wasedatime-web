import React from 'react';
import { Helmet } from 'react-helmet';

import SyllabusSearch from './SyllabusSearch';
import { RowWrapper } from '../../styled-components/Wrapper';

const Syllabus = () => {
  return (
    <RowWrapper>
      <Helmet>
        <title>WaseTime - Syllabus Search</title>
        <meta name="description" content="Syllabus Searching at Waseda University." />
        <meta property="og:title" content="WaseTime - Syllabus Search" />
        <meta property="og:description" content="Syllabus Searching at Waseda University." />
        <meta property="og:site_name" content="WaseTime - Syllabus Search" />
      </Helmet>
      <SyllabusSearch />
    </RowWrapper>
  );
};

export default Syllabus;
