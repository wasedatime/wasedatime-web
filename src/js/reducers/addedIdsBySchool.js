import { ADD_COURSE, REMOVE_COURSE, SAVE_TIMETABLE } from "../actions/types";

const addedIdsBySchool = (state = {}, action) => {
  switch (action.type) {
    case ADD_COURSE:
      return state;
    case REMOVE_COURSE:
      return state;
    case SAVE_TIMETABLE:
      return action.payload.idsBySchool;
    default:
      return state;
  }
};

export default addedIdsBySchool;
