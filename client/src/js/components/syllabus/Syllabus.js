import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import SyllabusSearch from './SyllabusSearch';

const Syllabus = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={SyllabusSearch} />
      <Route component={SyllabusSearch} />
    </Switch>
  );
};

export default Syllabus;

Syllabus.propTypes = {
  match: PropTypes.object.isRequired
};
