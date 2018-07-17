import { ADD_COURSE, REMOVE_COURSE,
  CHANGE_COURSE_COLOR, TOGGLE_COURSE_VISIBILITY } from '../actions/types';

const addedCoursePrefs = (state = [], action) => {
  switch (action.type) {
    case ADD_COURSE:
      return [
        ...state,
        {
          id: action.payload.id,
          color: state.length % 8,
          visibility: true
        }
      ];
    case REMOVE_COURSE:
      return state.filter(coursePref => coursePref.id !== action.payload.id);
    case CHANGE_COURSE_COLOR:
      return state.map(coursePref =>
        (coursePref.id === action.payload.id) ?
        {...coursePref, color: action.payload.color} :
        coursePref
      );
    case TOGGLE_COURSE_VISIBILITY:
      return state.map(coursePref =>
        (coursePref.id === action.payload.id) ?
        {...coursePref, visibility: !coursePref.visibility} :
        coursePref
      );
    default:
      return state;
  }
};

export default addedCoursePrefs;

export const getId = property => property.id;
