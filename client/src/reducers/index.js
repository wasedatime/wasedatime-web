import {
  FETCH_NISHI_BLDGS,
  FETCH_BLDG_CLASSROOMS,
  FETCH_BLDG_OCCUPIED_CLASSROOMS
} from '../actions/types';

const initialState = {
  nishiBldgs: [],
  nishiBldgsById: [],
  bldgClassrooms: [],
  bldgClassroomsById: [],
  bldgOccupiedClassrooms: [],
  bldgOccupiedClassroomsById: []
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case FETCH_NISHI_BLDGS:
      return {
        ...state,
        nishiBldgs: action.payload.nishiBldgs,
        nishiBldgsById: action.payload.nishiBldgsById
      };
    case FETCH_BLDG_CLASSROOMS:
      return {
        ...state,
        bldgClassrooms: action.payload.bldgClassrooms,
        bldgClassroomsById: action.payload.bldgClassroomsById
      };
    case FETCH_BLDG_OCCUPIED_CLASSROOMS:
      return {
        ...state,
        bldgOccupiedClassrooms: action.payload.bldgOccupiedClassrooms,
        bldgOccupiedClassroomsById: action.payload.bldgOccupiedClassroomsById
      };
    default:
      return state;
  }
}
