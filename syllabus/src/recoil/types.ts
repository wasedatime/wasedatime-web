import Course from "@app/types/course";

export enum AddedCoursesSortOptions {
  ADDED_ORDER = 0,
  COURSE_TITLE = 1,
  COURSE_TIME = 2,
}

export type AddedCoursePref = {
  color: number;
  visibility: boolean;
  displayLang: string;
};

export type AddedCourse = {
  course: Course;
  pref: AddedCoursePref;
};

export type AddedCourses = {
  [id: string]: AddedCourse;
};

export type AddedCoursesByTerm = {
  [term: string]: AddedCourse[];
};

export type AddedCoursesOrderedIds = string[];

export type AddedCourseIdsBySchool = {
  [school: string]: string[];
};

export type CourseIdAndPrefSavedOnline = {
  id: string;
  color: number;
  displayLang: string;
};

export type LoadedTimetable = CourseIdAndPrefSavedOnline[];

export type FetchedCourses = {
  [school: string]: Course[];
};

export type FetchedSchool = {
  name: string;
  exp: string;
  active: boolean;
  timestamp: number;
};

export type FetchedSchools = {
  [school: string]: FetchedSchool;
};
