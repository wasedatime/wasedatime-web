import { FETCH_COURSES_SUCCESS } from '../actions/types';

const courseListById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return action.response.entities.courses;
    default:
      return state;
  }
  return state;
};

export default courseListById;

export const getCourses = (state, id) => state[id];
