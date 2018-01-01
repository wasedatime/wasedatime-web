import axios from 'axios';
import { sortBy } from 'lodash';
import { normalize } from 'normalizr';

import {
  SEARCH_COURSES,
  FETCH_COURSE_BY_ID,
  FETCH_NISHI_BLDGS,
  FETCH_BLDG_CURRENT_CLASSROOMS
} from './types';
import { nishiBldgs } from '../api/buildingList';

export const searchCourses = searchTerm => {
  const payload = { searchTerm };
  return { type: SEARCH_COURSES, payload };
};

export const fetchCourseById = courseId => async (
  dispatch,
  getState,
  schema
) => {
  const res = await axios.get(`/api/courses/${courseId}`);
  const coursePage = res.data;
  const payload = { coursePage };
  dispatch({ type: FETCH_COURSE_BY_ID, payload });
};

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
