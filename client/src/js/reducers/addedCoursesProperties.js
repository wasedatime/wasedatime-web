import { ADD_COURSE } from '../actions/types';

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
    default:
      return state;
  }
};

export default addedCoursesProperties;
