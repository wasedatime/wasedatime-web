import { combineReducers } from 'redux';

import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE
} from '../actions/types';
import fetchedList, * as fromList from './fetchedList';
import fetchedById, * as fromById from './fetchedById';

const actionTypes = {
  fetchRequest: FETCH_COURSES_REQUEST,
  fetchSuccess: FETCH_COURSES_SUCCESS,
  fetchFailure: FETCH_COURSES_FAILURE
};

const fetchedCourses = combineReducers({
  byId: fetchedById('courses', actionTypes),
  list: fetchedList(actionTypes)
});

export default fetchedCourses;

export const getCourses = state => {
  const ids = fromList.getIds(state.list);
  return ids.map(id => fromById.getItems(state.byId, id));
};

export const getIsFetching = state => {
  return fromList.getIsFetching(state.list);
};

export const getError = state => {
  return fromList.getError(state.list);
};
