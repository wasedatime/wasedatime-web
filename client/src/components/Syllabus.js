import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CourseSearch from '../containers/CourseSearch';
// import SyllabusSearch from './RoomFinderNavigation';
// import '../styles/syllabus.css';

const Syllabus = ({ match }) => {
  return (
    <div className="syllabus__wrapper">
      <CourseSearch />
      {/* <SyllabusSearch />
      <Switch>
        <Route component={CourseList} />
      </Switch> */}
    </div>
  );
};

export default Syllabus;
