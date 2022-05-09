import { selector } from "recoil";
import { addedCourses, fetchedCourses } from "@app/recoil/atoms";
import { SyllabusKey } from "@app/constants/syllabus-data";
import {
  AddedCourse,
  AddedCourseIdsBySchool,
  AddedCoursesByTerm,
  CourseIdAndPrefSavedOnline,
} from "@app/recoil/types";
import Course from "@app/types/course";

export const addedCourseIdsBySchool = selector<AddedCourseIdsBySchool>({
  key: "addedCourseIdsBySchool",
  get: ({ get }) => {
    const courses = get(addedCourses);
    var courseIdsBySchool: AddedCourseIdsBySchool = {};
    Object.keys(courses).forEach((id) => {
      const school = courses[id].course[SyllabusKey.SCHOOL];
      courseIdsBySchool[school] = [...(courseIdsBySchool[school] || []), id];
    });
    return courseIdsBySchool;
  },
});

export const addedCoursesByTerm = selector<AddedCoursesByTerm>({
  key: "addedCoursesByTerm",
  get: ({ get }) => {
    const courses = get(addedCourses);
    let byTerm: AddedCoursesByTerm = {
      springSem: [],
      fallSem: [],
      springQuart: [],
      summerQuart: [],
      fallQuart: [],
      winterQuart: [],
    };
    for (const courseId in courses) {
      const courseAndPref = courses[courseId];
      const term = courseAndPref.course[SyllabusKey.TERM];
      if (term.match(/0|f/g)) byTerm.springQuart.push(courseAndPref);
      if (term.match(/1|f|0s/g)) byTerm.summerQuart.push(courseAndPref);
      if (term.match(/2|f/g)) byTerm.fallQuart.push(courseAndPref);
      if (term.match(/3|f|2s/g)) byTerm.winterQuart.push(courseAndPref);
      if (term.match(/0|1|f/g)) byTerm.springSem.push(courseAndPref);
      if (term.match(/2|3|f/g)) byTerm.fallSem.push(courseAndPref);
    }

    return byTerm;
  },
});

export const addedCoursePrefs = selector<CourseIdAndPrefSavedOnline[]>({
  key: "addedCoursePrefs",
  get: ({ get }) => {
    const courses = get(addedCourses);
    return Object.keys(courses).map((id) => ({
      id,
      color: courses[id].pref.color,
      displayLang: courses[id].pref.displayLang,
    }));
  },
});

export const fetchedCoursesList = selector<Course[]>({
  key: "fetchedCoursesList",
  get: ({ get }) => {
    const coursesBySchool = get(fetchedCourses);
    let flattenCoursesList: Course[] = [];
    return Object.keys(coursesBySchool).reduce(
      (coursesList, school) =>
        coursesBySchool[school]
          ? coursesList.concat(coursesBySchool[school])
          : coursesList,
      flattenCoursesList
    );
  },
});
