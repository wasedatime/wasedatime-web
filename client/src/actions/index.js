/*
 * action creators
 */

import {
  FETCH_NISHI_BLDGS,
  FETCH_BLDG_CLASSROOMS,
  FETCH_BLDG_OCCUPIED_CLASSROOMS
} from './types';

export function fetchNishiBldgs() {
  return { type: FETCH_NISHI_BLDGS };
}

export function fetchBldgClassrooms(bldg) {
  return { type: FETCH_BLDG_CLASSROOMS, bldg };
}

export function fetchBldgOccupiedClassrooms(bldg) {
  return { type: FETCH_BLDG_OCCUPIED_CLASSROOMS, bldg };
}
