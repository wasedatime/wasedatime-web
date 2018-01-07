import axios from 'axios';
import { sortBy } from 'lodash';
import { normalize } from 'normalizr';

import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  FETCH_BUILDINGS_REQUEST,
  FETCH_BUILDINGS_SUCCESS,
  FETCH_BUILDINGS_FAILURE,
  SEARCH_COURSES,
  FETCH_BLDG_CURRENT_CLASSROOMS
} from './types';
import * as schema from '../data/schema';

export const fetchCourses = filter => async (dispatch, getState) => {
  // if (getIsFetching(getState(), filter)) {
  //   return Promise.resolve();
  // }

  dispatch({
    type: FETCH_COURSES_REQUEST
  });

  try {
    const res = await axios.get('/api/courses');
    const courses = res.data;
    const normalizedCourses = normalize(courses, schema.coursesSchema);
    dispatch({
      type: FETCH_COURSES_SUCCESS,
      response: normalizedCourses
    });
  } catch (err) {
    dispatch({
      type: FETCH_COURSES_FAILURE,
      message: err.message || 'Something went wrong.'
    });
  }
};

export const searchCourses = searchTerm => {
  return { type: SEARCH_COURSES, searchTerm };
};

export const fetchBuildings = () => async (dispatch, getState) => {
  // if (getIsFetching(getState(), filter)) {
  //   return Promise.resolve();
  // }

  dispatch({
    type: FETCH_BUILDINGS_REQUEST
  });

  try {
    const res = await axios.get('/api/buildings');
    const buildings = res.data;
    const normalizedBuildings = normalize(buildings, schema.buildingsSchema);
    dispatch({
      type: FETCH_BUILDINGS_SUCCESS,
      response: normalizedBuildings
    });
  } catch (err) {
    dispatch({
      type: FETCH_BUILDINGS_FAILURE,
      message: err.message || 'Something went wrong.'
    });
  }
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
