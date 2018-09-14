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
    switch (action.type) {
      case ADD_COURSE:
        const semester = action.payload.course.term;
        if (reducerSemesters.includes(semester)) {
          return reducerFunction(state, action);
        }
        return state;
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

// export const getAddedCourses = (state, semester) => {
//   const subState = semester in fallSemesters ? state.fall : state.spring;
//   return fromSemesterCourses.getAddedCourses(subState);
// };

export const getPrefs = state => ({
  fall: fromSemesterCourses.getPrefs(state.fall),
  spring: fromSemesterCourses.getPrefs(state.spring)
});

export const getAddedCourses = state => ({
  fall: fromSemesterCourses.getAddedCourses(state.fall),
  spring: fromSemesterCourses.getAddedCourses(state.spring)
});

// export const getAddedCoursesAndPrefs = (state, semester) => {
//   const subState = semester in fallSemesters ? state.fall : state.spring;
//   return fromSemesterCourses.getAddedCoursesAndPrefs(subState);
// };

export const getAddedCoursesAndPrefs = state => ({
  fall: fromSemesterCourses.getAddedCoursesAndPrefs(state.fall),
  spring: fromSemesterCourses.getAddedCoursesAndPrefs(state.spring)
});

export const getById = state => ({
  ...fromSemesterCourses.getById(state.fall),
  ...fromSemesterCourses.getById(state.spring)
});
