/*
 * action creators
 */

import {
  FETCH_NISHI_BLDGS,
  FETCH_BLDG_CLASSROOMS,
  FETCH_BLDG_OCCUPIED_CLASSROOMS
} from './types';

export function fetchNishiBldgs() {
  var nishi_bldgs = [
    '5a3b9b0fd7776b6d49e060b5', //51
    '5a3b9b0fd7776b6d49e060b6', //52
    '5a3b9b0fd7776b6d49e060b7' //53
  ];
  var nishi_bldgsById = {
    '5a3b9b0fd7776b6d49e060b5': { name: '51' },
    '5a3b9b0fd7776b6d49e060b6': { name: '52' },
    '5a3b9b0fd7776b6d49e060b7': { name: '53' }
  };
  var payload = { nishi_bldgs, nishi_bldgsById };
  return { type: FETCH_NISHI_BLDGS, payload };
}

export function fetchBldgClassrooms(bldg) {
  var bldg_classrooms = [
    '5a3b7c1ea2b3d21167f1564b',
    '5a3b7c1ea2b3d21167f15679',
    '5a3b7c1ea2b3d21167f15668'
  ];
  var bldg_classroomsById = {
    '5a3b7c1ea2b3d21167f1564b': { name: '04-03B(社会文化領域研究室)' },
    '5a3b7c1ea2b3d21167f15679': { name: '06-04' },
    '5a3b7c1ea2b3d21167f15668': { name: '07-04' }
  };
  var payload = { bldg_classrooms, bldg_classroomsById };
  return { type: FETCH_BLDG_CLASSROOMS, payload };
}

export function fetchBldgOccupiedClassrooms(bldg) {
  var bldg_occupied_classrooms = ['5a3b7c1ea2b3d21167f1564b'];
  var bldg_occupied_classroomsById = { name: '04-03B(社会文化領域研究室)' };
  var payload = { bldg_occupied_classrooms, bldg_occupied_classroomsById };
  return { type: FETCH_BLDG_OCCUPIED_CLASSROOMS, payload };
}
