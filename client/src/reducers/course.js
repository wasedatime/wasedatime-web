import { combineReducers } from 'redux';

import courseList, * as fromCourseList from './courseList';
import courseListById, * as fromCourseListById from './courseListById';

const courses = combineReducers({ courseListById, courseList });

export default courses;

export const getCourses = state => {
  const ids = fromCourseList.getIds(state.courses.courseList);
  return ids.map(id =>
    fromCourseListById.getCourses(state.courses.courseListById)
  );
};

export const getIsFetching = state => {
  return fromCourseList.getIsFetching(state.courses.courseList);
};

export const getErrorMessage = state => {
  return fromCourseList.getErrorMessage(state.courses.courseList);
};
