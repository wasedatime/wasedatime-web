import { combineReducers } from 'redux';

import searchTerm from './searchTerm';
import courses from './courses';
import buildings from './buildings';

const app = combineReducers({ searchTerm, courses, buildings });

export default app;
