/*
 * action creators
 */

import axios from 'axios';
import { normalize } from 'normalizr';
import { nishiBldgs } from '../api/buildingList';

import {
  FETCH_NISHI_BLDGS,
  FETCH_BLDG_CLASSROOMS,
  FETCH_BLDG_OCCUPIED_CLASSROOMS,
  FETCH_BLDG_CURRENT_CLASSROOMS
} from './types';

//This async action creator is an example of a thunk in redux-thunk.
export const fetchNishiBldgs = () => async (dispatch, getState, schema) => {
  const res = await axios.get('/api/buildings');
  //only include bldgs that are inside nishiBldgs array
  const nishiData = res.data.filter(value => {
    return nishiBldgs.includes(value.name);
  });
  const normalizedNishiData = normalize(nishiData, schema.bldgListSchema);
  const nishiBldgIds = normalizedNishiData.result;
  const nishiBldgsById = normalizedNishiData.entities.bldgs;
  const payload = { nishiBldgIds, nishiBldgsById };
  dispatch({ type: FETCH_NISHI_BLDGS, payload });
};

export const fetchBldgClassrooms = bldg => async (
  dispatch,
  getState,
  schema
) => {
  const res = await axios.get(`/api/buildings/${bldg}`);
  const normalizedData = normalize(
    res.data.classrooms,
    schema.classroomListSchema
  );
  const bldgClassroomIds = normalizedData.result;
  const bldgClassroomsById = normalizedData.entities.classrooms;
  const payload = { bldgClassroomIds, bldgClassroomsById };
  dispatch({ type: FETCH_BLDG_CLASSROOMS, payload });
};

export const fetchBldgOccupiedClassrooms = bldg => async (
  dispatch,
  getState,
  schema
) => {
  const res = await axios.get(`/api/current/${bldg}`);
  const data = res.data.occupiedClassrooms;
  var payload = {
    bldgOccupiedClassroomIds: [],
    bldgOccupiedClassroomsById: []
  };
  if (data.length !== 0) {
    const normalizedData = normalize(data, schema.occupiedClassroomListSchema);
    const bldgOccupiedClassroomIds = normalizedData.result;
    const bldgOccupiedClassroomsById =
      normalizedData.entities.occupiedClassrooms;
    payload = { bldgOccupiedClassroomIds, bldgOccupiedClassroomsById };
  }

  dispatch({ type: FETCH_BLDG_OCCUPIED_CLASSROOMS, payload });
};

export const fetchBldgCurrentClassrooms = bldg => async (
  dispatch,
  getState,
  schema
) => {
  const res = await axios.get(`/api/current/${bldg}`);
  const bldgClassrooms = res.data.buildingClassrooms;
  const normalizedBldgData = normalize(
    bldgClassrooms,
    schema.classroomListSchema
  );
  const bldgClassroomIds = normalizedBldgData.result;
  const bldgClassroomsById = normalizedBldgData.entities.classrooms;

  var payload = {
    bldgClassroomIds,
    bldgClassroomsById,
    bldgOccupiedClassroomIds: [],
    bldgOccupiedClassroomsById: []
  };

  const occupiedClassrooms = res.data.occupiedClassrooms;
  if (occupiedClassrooms.length !== 0) {
    const normalizedOccupiedData = normalize(
      occupiedClassrooms,
      schema.occupiedClassroomListSchema
    );
    const bldgOccupiedClassroomIds = normalizedOccupiedData.result;
    const bldgOccupiedClassroomsById =
      normalizedOccupiedData.entities.occupiedClassrooms;
    payload = {
      ...payload,
      bldgOccupiedClassroomIds,
      bldgOccupiedClassroomsById
    };
  }

  dispatch({ type: FETCH_BLDG_CURRENT_CLASSROOMS, payload });
};
