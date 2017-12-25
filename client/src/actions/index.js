/*
 * action creators
 */

import axios from 'axios';

import {
  FETCH_NISHI_BLDGS,
  FETCH_BLDG_CLASSROOMS,
  FETCH_BLDG_OCCUPIED_CLASSROOMS
} from './types';

//This async action creator is a thunk.
export const fetchNishiBldgs = () => {
  return function(dispatch) {
    var nishiBldgs = [
      'time',
      '5a3b9b0fd7776b6d49e060b5', //51
      '5a3b9b0fd7776b6d49e060b6', //52
      '5a3b9b0fd7776b6d49e060b7' //53
    ];
    var d = new Date();
    var t = `Updated Time: ${d.getHours()}:${d.getMinutes()}`;
    var nishiBldgsById = {
      time: { name: t },
      '5a3b9b0fd7776b6d49e060b5': { name: '51' },
      '5a3b9b0fd7776b6d49e060b6': { name: '52' },
      '5a3b9b0fd7776b6d49e060b7': { name: '53' }
    };
    var payload = { nishiBldgs, nishiBldgsById };

    axios.get('/api/buildings').then(res => {
      console.log(res);
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
