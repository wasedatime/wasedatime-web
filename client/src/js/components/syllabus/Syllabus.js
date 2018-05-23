import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import SyllabusSearch from './SyllabusSearch';
import CoursePageContainer from '../../containers/CoursePageContainer';

const Syllabus = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={SyllabusSearch} />
      <Route path={`${match.url}/:courseId`} component={CoursePageContainer} />
      <Route component={SyllabusSearch} />
    </Switch>
  );
};

export default Syllabus;

Syllabus.propTypes = {
  match: PropTypes.object.isRequired
};
