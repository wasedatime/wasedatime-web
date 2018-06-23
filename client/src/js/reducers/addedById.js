import { ADD_COURSE } from '../actions/types';

const addedById = (state = {}, action) => {
  switch (action.type) {
    case ADD_COURSE:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload.course
        }
      };
    default:
      return state;
  }
}

export default addedById;

export const getItem = (state, id) => state[id];
