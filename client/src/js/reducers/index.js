import { combineReducers } from 'redux';

import stats from './stats';
import fetchedCourses from './fetchedCourses';
import fetchedBuildings from './fetchedBuildings';
import addedCourses from './addedCourses';
import user from './user';

const app = combineReducers({
  stats,
  fetchedCourses,
  fetchedBuildings,
  addedCourses,
  user
});

export default app;
