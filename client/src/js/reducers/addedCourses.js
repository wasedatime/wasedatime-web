import { combineReducers } from 'redux';

import {
  HYDRATE_ADDED_COURSES,
  ADD_COURSE,
  REMOVE_COURSE
} from '../actions/types';
import addedSemesterCourses, * as fromSemesterCourses from './addedSemesterCourses';
import { fallSemesters, springSemesters } from '../data/semesters';

// Higher-order reducer.
// https://redux.js.org/recipes/structuringreducers/reusingreducerlogic
const createSemesterWrapperReducer = (reducerFunction, reducerSemesters) => {
  return (state, action) => {
    let semester = null;
    switch (action.type) {
      case ADD_COURSE:
      case REMOVE_COURSE:
        semester = action.payload.semester;
        if (reducerSemesters.includes(semester)) {
          return reducerFunction(state, action);
        }
        return state;
      case HYDRATE_ADDED_COURSES:
        return reducerFunction(state, action);
      default:
        const isInitializationCall = state === undefined;
        if (isInitializationCall) {
          return reducerFunction(state, action);
        }
        return state;
    }
  };
};

const addedCourses = combineReducers({
  fall: createSemesterWrapperReducer(addedSemesterCourses, fallSemesters),
  spring: createSemesterWrapperReducer(addedSemesterCourses, springSemesters)
});

export default addedCourses;

export const getPrefs = state => ({
  fall: fromSemesterCourses.getPrefs(state.fall),
  spring: fromSemesterCourses.getPrefs(state.spring)
});

export const getIsPrefsEmpty = state => {
  return (
    !fromSemesterCourses.getPrefs(state.fall).length &&
    !fromSemesterCourses.getPrefs(state.spring).length
  );
};

export const getAddedCourses = state => ({
  fall: fromSemesterCourses.getAddedCourses(state.fall),
  spring: fromSemesterCourses.getAddedCourses(state.spring)
});

export const getIsAddedCoursesEmpty = state => {
  return (
    !fromSemesterCourses.getAddedCourses(state.fall) &&
    !fromSemesterCourses.getAddedCourses(state.spring)
  );
};

export const getAddedCoursesAndPrefs = state => ({
  fall: fromSemesterCourses.getAddedCoursesAndPrefs(state.fall),
  spring: fromSemesterCourses.getAddedCoursesAndPrefs(state.spring)
});

export const getById = state => ({
  ...fromSemesterCourses.getById(state.fall),
  ...fromSemesterCourses.getById(state.spring)
});
