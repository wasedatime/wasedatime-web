import { combineReducers } from 'redux';

import stats from './stats';
import fetchedCourses from './fetchedCourses';
import fetchedBuildings from './fetchedBuildings';
import addedCourses from './addedCourses';

const app = combineReducers({
  stats,
  fetchedCourses,
  fetchedBuildings,
  addedCourses
});

export default app;
