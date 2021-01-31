import { combineReducers } from "redux";

import fetchedCourses from "./fetchedCourses";

const root = combineReducers({
  fetchedCourses,
});

export default root;
