/*
 * action creators
 */

import axios from 'axios';
import { normalize } from 'normalizr';
//import { bldgById } from '../api/schema';

import {
  FETCH_NISHI_BLDGS,
  FETCH_BLDG_CLASSROOMS,
  FETCH_BLDG_OCCUPIED_CLASSROOMS
} from './types';

//This async action creator is a thunk.
export const fetchNishiBldgs = () => {
  return function(dispatch, getState, schema) {
    axios.get('/api/buildings').then(res => {
      const nishiBldgNames = [
        '51',
        '52',
        '53',
        '54',
        '55',
        '56',
        '57',
        '58',
        '59',
        '60',
        '61',
        '62',
        '63'
      ];
      //only include bldgs that are inside nishiBldgs array
      const nishiData = res.data.filter(value => {
        return nishiBldgNames.includes(value.name);
      });
      const normalizedNishiData = normalize(nishiData, schema.bldgListSchema);
      const nishiBldgs = normalizedNishiData.result;
      const nishiBldgsById = normalizedNishiData.entities.bldgs;
      const payload = { nishiBldgs, nishiBldgsById };
      dispatch({ type: FETCH_NISHI_BLDGS, payload });
    });
  };
};

export function fetchBldgClassrooms(bldg) {
  var bldgClassrooms = [
    '5a3b7c1ea2b3d21167f1564b',
    '5a3b7c1ea2b3d21167f15679',
    '5a3b7c1ea2b3d21167f15668'
  ];
  var bldgClassroomsById = {
    '5a3b7c1ea2b3d21167f1564b': { name: '04-03B(社会文化領域研究室)' },
    '5a3b7c1ea2b3d21167f15679': { name: '06-04' },
    '5a3b7c1ea2b3d21167f15668': { name: '07-04' }
  };
  var payload = { bldgClassrooms, bldgClassroomsById };
  return { type: FETCH_BLDG_CLASSROOMS, payload };
}

export function fetchBldgOccupiedClassrooms(bldg) {
  var bldgOccupiedClassrooms = ['5a3b7c1ea2b3d21167f1564b'];
  var bldgOccupiedClassroomsById = {
    '5a3b7c1ea2b3d21167f1564b': { name: '04-03B(社会文化領域研究室)' }
  };
  var payload = { bldgOccupiedClassrooms, bldgOccupiedClassroomsById };
  return { type: FETCH_BLDG_OCCUPIED_CLASSROOMS, payload };
}
