import { combineReducers } from 'redux';

import addedSemesterCourses, * as fromSemesterCourses from './addedSemesterCourses';
import { fallSemesters, springSemesters } from '../data/semesters';

// Higher-order reducer.
// https://redux.js.org/recipes/structuringreducers/reusingreducerlogic
const createSemesterWrapperReducer = (reducerFunction, reducerSemesters) => {
  return (state, action) => {
    const { semester } = action;
    const isInitializationCall = state === undefined;
    if (semester in reducerSemesters || isInitializationCall) {
      return reducerFunction(state, action);
    }
    return state;
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
  fall: fromSemesterCourses.getAddedCoursesAndPrefs(state.fall),
  spring: fromSemesterCourses.getAddedCoursesAndPrefs(state.spring)
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
