import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CourseListContainer from '../containers/CourseListContainer';
import SyllabusSearchBar from '../containers/SyllabusSearchBar';
// import '../styles/syllabus.css';

const Syllabus = ({ match }) => {
  return (
    <div className="syllabus__wrapper">
      <SyllabusSearchBar />
      <CourseListContainer />
      {/* <SyllabusSearch />
      <Switch>
        <Route component={CourseList} />
      </Switch> */}
    </div>
  );
};

export default Syllabus;
