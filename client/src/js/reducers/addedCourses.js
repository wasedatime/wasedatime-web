import { combineReducers } from 'redux';

import addedById, * as fromById from './addedById';
import addedCoursesProperties, * as fromProperties from './addedCoursesProperties';

const addedCourses = combineReducers({
  properties: addedCoursesProperties,
  byId: addedById
});

export default addedCourses;

export const getProperties = state => state.properties;

export const getById = state => state.byId;

export const getAddedCourses = state => {
  if (!Object.keys(state.byId).length) return [];
  return state.properties.map(property => (
    fromById.getItem(state.byId, fromProperties.getId(property))
  ));
};

export const getAddedCoursesWithProperties = state => {
  if (!Object.keys(state.byId).length) return [];
  return state.properties.map(property => {
    return {
      ...property,
      course: fromById.getItem(state.byId, fromProperties.getId(property))
    };
  });
};
