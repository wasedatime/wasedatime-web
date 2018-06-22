import { combineReducers } from 'redux';

import addedById from './addedById';
import addedCoursesProperties from './addedCoursesProperties';

// addedCourses : {
//   properties: [{
//    id: 111,
//
//    color: green,
//    visible: true
//   }...]
//   byId: {
//
//   }
// }

const addedCourses = combineReducers({
  properties: addedCoursesProperties,
  byId: addedById
})

export default addedCourses;
