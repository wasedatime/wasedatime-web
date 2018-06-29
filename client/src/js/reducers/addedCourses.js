import { combineReducers } from 'redux';

import addedById, * as fromById from './addedById';
import addedCoursesProperties, * as fromProperties from './addedCoursesProperties';

const addedCourses = combineReducers({
  properties: addedCoursesProperties,
  byId: addedById
});

export default addedCourses;

export const getById = state => state.byId;

export const getCourses = state => {
  return state.properties.map(property => {
    return {
      ...property,
      course: fromById.getItem(state.byId, fromProperties.getId(property))
    };
  });
};
