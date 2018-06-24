import { ADD_COURSE, REMOVE_COURSE } from '../actions/types';

const addedCoursesProperties = (state = [], action) => {
  switch (action.type) {
    case ADD_COURSE:
      return [
        ...state,
        {
          id: action.payload.id,
          color: 0,
          visibility: true
        }
      ];
    case REMOVE_COURSE:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default addedCoursesProperties;

export const getId = property => property.id;
