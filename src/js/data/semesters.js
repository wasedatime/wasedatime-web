//TODO Cannot import outside src
// import translation from "../../../public/locales/en/translation.json";
// const semesterMap = translation.syllabus.semesterMap;
// const semesters = Object.keys(semesterMap);

export const springSemesterMap = {
  springSem: "Spring Semester",

  springQuart: "Spring Quarter",
  summerQuart: "Summer Quarter",
  fullYear: "Full Year",

  intensiveSpringSem: "Intensive: Spring Semester",
  intensiveSpringFallSem: "Intensive: Spring & Fall Semester",

  intensiveSpring: "Intensive: Spring",
  intensiveSummer: "Intensive: Summer",
  springSummer: "Spring & Summer",

  undecided: "undecided",
};

export const fallSemesterMap = {
  fallSem: "Fall Semester",

  fallQuart: "Fall Quarter",
  winterQuart: "Winter Quarter",
  fullYear: "Full Year",

  intensiveFallSem: "Intensive: Fall Semester",
  intensiveSpringFallSem: "Intensive: Spring & Fall Semester",

  intensiveFall: "Intensive: Fall",
  intensiveWinter: "Intensive: Winter",
  fallWinter: "Fall & Winter",

  undecided: "undecided",
};

export const semesterMap = {
  ...springSemesterMap,
  ...fallSemesterMap,
};

export const springSemesters = Object.keys(springSemesterMap);
export const fallSemesters = Object.keys(fallSemesterMap);
