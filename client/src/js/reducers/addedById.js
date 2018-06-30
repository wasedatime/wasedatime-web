import { HYDRATE_ADDED_COURSES,
  ADD_COURSE, REMOVE_COURSE } from '../actions/types';

const addedById = (state = {}, action) => {
  switch (action.type) {
    case HYDRATE_ADDED_COURSES:
      // Provide an init value of {} to the reduce function
      return action.payload.properties.reduce((acc, property) => {
        return {
          ...acc,
          [property.id]: {
            ...action.payload.coursesById[property.id]
          }
        }
      }, {})
    case ADD_COURSE:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload.course
        }
      };
    case REMOVE_COURSE:
      const { [action.payload.id]: value, ...rest } = state;
      return rest;
    default:
      return state;
  }
};

export default addedById;

export const getItem = (state, id) => state[id];
