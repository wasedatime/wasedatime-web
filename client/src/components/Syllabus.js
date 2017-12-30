import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SyllabusSearch from './SyllabusSearch';
import CoursePageContainer from '../containers/CoursePageContainer';
import '../styles/syllabus.css';

const Syllabus = ({ match }) => {
  return (
    <div className="syllabus__wrapper">
      <Switch>
        <Route exact path={`${match.url}`} component={SyllabusSearch} />
        <Route
          path={`${match.url}/:courseId`}
          component={CoursePageContainer}
        />
        <Route component={SyllabusSearch} />
      </Switch>
    </div>
  );
};

export default Syllabus;
