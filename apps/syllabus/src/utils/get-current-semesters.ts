import { Semester } from "@app/constants/timetable-terms"

export const getCurrentSemester = () => {
  const month = new Date().getMonth()

  return month > 1 && month < 8 ? Semester.SPRING : Semester.FALL
}
