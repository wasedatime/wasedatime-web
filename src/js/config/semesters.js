export const SEMESTERS = Object.freeze({
  FALL: "fall",
  SPRING: "spring",
});

export const getCurrentSemester = () => {
  const month = new Date().getMonth();
  return month > 1 && month < 8 ? SEMESTERS.SPRING : SEMESTERS.FALL;
};
