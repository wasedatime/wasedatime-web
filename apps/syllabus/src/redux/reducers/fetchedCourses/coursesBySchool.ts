import { SyllabusKey } from "@app/constants/syllabus-data"
import {
  FETCH_COURSES_SUCCESS,
  ADD_SCHOOL_FETCH_COURSES_SUCCESS,
  REMOVE_SCHOOL,
} from "@app/redux/actions/types"
import Course from "@app/types/course"

interface PayloadProps {
  coursesBySchool?: {
    [school: string]: Course[]
  }
  courses?: Course[]
  school?: string
}

interface ActionProps {
  type: string
  payload: PayloadProps
}

interface coursesBySchoolProps {
  [school: string]: Course[]
}

const initialState: coursesBySchoolProps = {}

const coursesBySchool = (
  state = initialState,
  action: ActionProps
): coursesBySchoolProps => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return action.payload.coursesBySchool || {}
    case ADD_SCHOOL_FETCH_COURSES_SUCCESS:
      return {
        ...state,
        [action.payload.school]: action.payload.courses || [],
      }
    case REMOVE_SCHOOL:
      return { ...state, [action.payload.school]: [] }
    default:
      return state
  }
}

export default coursesBySchool
