import { combineReducers } from 'redux';

import {
  FETCH_BUILDINGS_REQUEST,
  FETCH_BUILDINGS_SUCCESS,
  FETCH_BUILDINGS_FAILURE
} from '../actions/types';
import list, * as fromList from './list';
import byId, * as fromById from './byId';

const actionTypes = {
  fetchRequest: FETCH_BUILDINGS_REQUEST,
  fetchSuccess: FETCH_BUILDINGS_SUCCESS,
  fetchFailure: FETCH_BUILDINGS_FAILURE
};

const buildings = combineReducers({
  byId: byId('buildings', actionTypes),
  list: list(actionTypes)
});

export default buildings;

export const getBuildings = (state, filterArray) => {
  const ids = fromList.getIds(state.list);
  const buildings = ids.map(id => fromById.getItems(state.byId, id));
  return buildings.filter(building => {
    return filterArray.includes(building.name);
  });
};

export const getIsFetching = state => {
  return fromList.getIsFetching(state.list);
};

export const getErrorMessage = state => {
  return fromList.getErrorMessage(state.list);
};
