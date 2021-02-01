import { combineReducers } from "redux";
import fetchedCourses from "./fetchedCourses";
import addedCourses from "./addedCourses";

const root = combineReducers({
  addedCourses,
  fetchedCourses,
});

export default root;
