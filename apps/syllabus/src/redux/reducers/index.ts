import { combineReducers } from "redux"

import addedCourses from "@app/redux/reducers/addedCourses"
import fetchedCourses from "@app/redux/reducers/fetchedCourses"

export const root = combineReducers({
  addedCourses,
  fetchedCourses,
})

export type ReduxRootState = ReturnType<typeof root>
export default root
