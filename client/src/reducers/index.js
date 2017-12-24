import {
  FETCH_NISHI_BLDGS,
  FETCH_BLDG_CLASSROOMS,
  FETCH_BLDG_OCCUPIED_CLASSROOMS
} from '../actions/types';

const initialState = {
  nishi_bldgs: [],
  nishi_bldgsById: [],
  bldg_classrooms: [],
  bldg_classroomsById: [],
  bldg_occupied_classrooms: [],
  bldg_occupied_classroomsById: []
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case FETCH_NISHI_BLDGS:
      return {
        ...state,
        nishi_bldgs: action.payload.nishi_bldgs,
        nishi_bldgsById: action.payload.nishi_bldgsById
      };
    case FETCH_BLDG_CLASSROOMS:
      return {
        ...state,
        bldg_classrooms: action.payload.bldg_classrooms,
        bldg_classroomsById: action.payload.bldg_classroomsById
      };
    case FETCH_BLDG_OCCUPIED_CLASSROOMS:
      return {
        ...state,
        bldg_occupied_classrooms: action.payload.bldg_occupied_classrooms,
        bldg_occupied_classroomsById: action.payload.ldg_occupied_classroomsById
      };
    default:
      return state;
  }
}
