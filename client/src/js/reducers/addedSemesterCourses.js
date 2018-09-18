import { combineReducers } from 'redux';

import addedById, * as fromById from './addedById';
import addedCoursePrefs, * as fromPrefs from './addedCoursePrefs';
import sortingOption from './sortingOption';

const addedSemesterCourses = combineReducers({
  prefs: addedCoursePrefs,
  byId: addedById,
  sortingOption: sortingOption
});

export default addedSemesterCourses;

export const getPrefs = state => state.prefs;

export const getById = state => state.byId;

export const getAddedCourses = state => {
  if (!Object.keys(state.byId).length) return [];
  return state.prefs.map(pref =>
    fromById.getItem(state.byId, fromPrefs.getId(pref))
  );
};

export const getAddedCoursesAndPrefs = state => {
  if (!Object.keys(state.byId).length) return [];
  return state.prefs.map(pref => {
    return {
      ...pref,
      course: fromById.getItem(state.byId, fromPrefs.getId(pref))
    };
  });
};
