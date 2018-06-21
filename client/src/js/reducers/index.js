import { combineReducers } from 'redux';

import stats from './stats';
import fetchedCourses from './fetchedCourses';
import fetchedBuildings from './fetchedBuildings';

const app = combineReducers({ stats, fetchedCourses, fetchedBuildings});

export default app;
