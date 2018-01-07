import { combineReducers } from 'redux';

import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE
} from '../actions/types';
import list, * as fromList from './list';
import byId, * as fromById from './byId';

const actionTypes = {
  fetchRequest: FETCH_COURSES_REQUEST,
  fetchSuccess: FETCH_COURSES_SUCCESS,
  fetchFailure: FETCH_COURSES_FAILURE
};

const courses = combineReducers({
  byId: byId('courses', actionTypes),
  list: list(actionTypes)
});

export default courses;

export const getCourses = state => {
  const ids = fromList.getIds(state.list);
  return ids.map(id => fromById.getItems(state.byId, id));
};

export const getIsFetching = state => {
  return fromList.getIsFetching(state.list);
};

export const getErrorMessage = state => {
  return fromList.getErrorMessage(state.list);
};
