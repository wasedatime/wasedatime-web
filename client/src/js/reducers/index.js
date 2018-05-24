import { combineReducers } from 'redux';

import stats from './stats';
import courses from './courses';
import buildings from './buildings';

const app = combineReducers({ stats, courses, buildings});

export default app;
