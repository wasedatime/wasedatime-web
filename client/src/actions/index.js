/*
 * action creators
 */

import axios from 'axios';
import { sortBy } from 'lodash';
import { normalize } from 'normalizr';

import { nishiBldgs } from '../api/buildingList';
import {
  SEARCH_COURSES,
  FETCH_NISHI_BLDGS,
  FETCH_BLDG_CURRENT_CLASSROOMS
} from './types';
import courses from '../data/2017F_courses_sci_eng_search.json';

const tokenize = string => {
  return string.trim().split(/\W+/g);
};

const regexify = string => {
  const terms = string.trim().replace(/\W+/g, '\\W+');
  const reg = RegExp(`\\b${terms}`, 'i');
  return reg;
};

const filterCourses = (searchTerm, courses) => {
  const searchRegexes = tokenize(searchTerm).map(regexify);

  return courses.filter(course => {
    return searchRegexes.every(regex => {
      return regex.test(course.title) || regex.test(course.instructor);
    });
  });
};

const sortCourses = (searchTerm, courses) => {
  const searchRegexes = tokenize(searchTerm).map(regexify);

  return sortBy(courses, course => {
    let sum = 0;
    for (let i = 0; i < searchRegexes.length; i++) {
      if (searchRegexes[i].test(course.title)) {
        sum += 1;
      } else if (searchRegexes[i].test(course.instructor)) {
        sum += 2;
      } else {
        sum += 3;
      }
      return sum;
    }
  });
};

export const searchCourses = searchTerm => {
  var courseResults = [];
  if (searchTerm && searchTerm.length > 2) {
    console.log('searching');
    const filteredCourses = filterCourses(searchTerm, courses);
    courseResults = sortCourses(searchTerm, filteredCourses);
  }

  //const courseResults = courses[0];
  const payload = { courseResults };
  return { type: SEARCH_COURSES, payload };
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
