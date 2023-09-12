export const SEMESTERS = Object.freeze({
  FALL: "fallSem",
  SPRING: "springSem",
})

export const QUARTERS = Object.freeze({
  SPRING: "springQuart",
  SUMMER: "summerQuart",
  FALL: "fallQuart",
  WINTER: "winterQuart",
})

export const getCurrentSemester = () => {
  const month = new Date().getMonth()

  return month > 1 && month < 8 ? SEMESTERS.SPRING : SEMESTERS.FALL
}

export default SEMESTERS
