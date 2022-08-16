import { atom } from "recoil";
import {
  AddedCourses,
  AddedCoursesOrderedIds,
  AddedCoursesSortOptions,
  FetchedCourses,
  FetchedSchools,
} from "@app/recoil/types";

export const addedCourses = atom<AddedCourses>({
  key: "addedCourses",
  default: {},
});

export const addedCoursesOrderedIds = atom<AddedCoursesOrderedIds>({
  key: "addedCoursesOrderedIds",
  default: [],
});

export const addedCoursesSortOption = atom<AddedCoursesSortOptions>({
  key: "addedCoursesSortOption",
  default: AddedCoursesSortOptions.ADDED_ORDER,
});

export const fetchedCourses = atom<FetchedCourses>({
  key: "fetchedCourses",
  default: {},
});

export const isCoursesFetching = atom<boolean>({
  key: "isCoursesFetching",
  default: false,
});

export const fetchedSchools = atom<FetchedSchools>({
  key: "fetchedSchools",
  default: {},
});
