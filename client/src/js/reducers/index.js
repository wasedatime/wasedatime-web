import { combineReducers } from 'redux';

import stats from './stats';
import searchTerm from './searchTerm';
import courses from './courses';
import buildings from './buildings';

const app = combineReducers({ stats, searchTerm, courses, buildings});

export default app;
