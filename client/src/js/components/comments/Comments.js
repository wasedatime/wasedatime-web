import React from 'react';
import { Helmet } from 'react-helmet';

import { RowWrapper } from '../../styled-components/Wrapper';
import CourseComments from './CourseComments';
import CourseItem from '../syllabus/CourseItem';

const Comments = ({ match }) => {
  return (
    <RowWrapper>
      <Helmet>
        <title>WasedaTime - Course Comments</title>
        <meta
          name="description"
          content="Syllabus Searching at Waseda University."
        />
        <meta property="og:title" content="WasedaTime - Course Comments" />
        <meta
          property="og:description"
          content="Syllabus Searching at Waseda University."
        />
        <meta property="og:site_name" content="WasedaTime - Course Comments" />
      </Helmet>
      <CourseComments courseKey={match.params.courseKey} />
    </RowWrapper>
  );
};

export default Comments;
