import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CourseListContainer from '../containers/CourseListContainer';
import SyllabusSearchBar from '../containers/SyllabusSearchBar';
import CoursePageContainer from '../containers/CoursePageContainer';
import '../styles/syllabus.css';

const Syllabus = ({ match }) => {
  return (
    <div className="syllabus__wrapper">
      <SyllabusSearchBar />
      <Switch>
        <Route exact path={`${match.url}`} component={CourseListContainer} />
        <Route
          path={`${match.url}/:courseId`}
          component={CoursePageContainer}
        />
        <Route component={CourseListContainer} />
      </Switch>
    </div>
  );
};

export default Syllabus;
