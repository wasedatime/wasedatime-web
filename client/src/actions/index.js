/*
 * action creators
 */

import axios from 'axios';
import { normalize } from 'normalizr';
import { nishiBldgs } from '../api/buildingList';

import {
  FETCH_NISHI_BLDGS,
  FETCH_BLDG_CLASSROOMS,
  FETCH_BLDG_OCCUPIED_CLASSROOMS
} from './types';

//This async action creator is a thunk.
export const fetchNishiBldgs = () => {
  return function(dispatch, getState, schema) {
    axios.get('/api/buildings').then(res => {
      //only include bldgs that are inside nishiBldgs array
      console.log(nishiBldgs);
      const nishiData = res.data.filter(value => {
        return nishiBldgs.includes(value.name);
      });
      const normalizedNishiData = normalize(nishiData, schema.bldgListSchema);
      const nishiBldgIds = normalizedNishiData.result;
      const nishiBldgsById = normalizedNishiData.entities.bldgs;
      const payload = { nishiBldgIds, nishiBldgsById };
      dispatch({ type: FETCH_NISHI_BLDGS, payload });
    });
  };
};

export function fetchBldgClassrooms(bldg) {
  var bldgClassroomIds = [
    '5a3b7c1ea2b3d21167f1564b',
    '5a3b7c1ea2b3d21167f15679',
    '5a3b7c1ea2b3d21167f15668'
  ];
  var bldgClassroomsById = {
    '5a3b7c1ea2b3d21167f1564b': { name: '04-03B(社会文化領域研究室)' },
    '5a3b7c1ea2b3d21167f15679': { name: '06-04' },
    '5a3b7c1ea2b3d21167f15668': { name: '07-04' }
  };
  var payload = { bldgClassroomIds, bldgClassroomsById };
  return { type: FETCH_BLDG_CLASSROOMS, payload };
}

export function fetchBldgOccupiedClassrooms(bldg) {
  var bldgOccupiedClassroomIds = ['5a3b7c1ea2b3d21167f1564b'];
  var bldgOccupiedClassroomsById = {
    '5a3b7c1ea2b3d21167f1564b': { name: '04-03B(社会文化領域研究室)' }
  };
  var payload = { bldgOccupiedClassroomIds, bldgOccupiedClassroomsById };
  return { type: FETCH_BLDG_OCCUPIED_CLASSROOMS, payload };
}
