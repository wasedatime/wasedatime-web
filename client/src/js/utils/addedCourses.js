import { ADDED_ORDER, COURSE_TITLE, COURSE_TIME } from "../data/sortingOptions";

export const sortAddedCourses = (addedCourses, sortingOption) => {
  switch (sortingOption) {
    case ADDED_ORDER:
      return addedCourses;
    case COURSE_TITLE:
      return addedCourses.sort((a, b) => {
        // ignore upper and lowercase
        const courseTitleA = a.t.toUpperCase();
        const courseTitleB = b.t.toUpperCase();
        if (courseTitleA < courseTitleB) {
          return -1;
        } else if (courseTitleA > courseTitleB) {
          return 1;
        } else {
          return 0;
        }
      });
    case COURSE_TIME:
      return addedCourses.sort((a, b) => {
        const firstOccurrenceDayA = a.os[0].d;
        const firstOccurrenceDayB = b.os[0].d;
        const firstOccurrenceStartPeriodA = a.os[0].s;
        const firstOccurrenceStartPeriodB = b.os[0].s;
        if (firstOccurrenceDayA < firstOccurrenceDayB) {
          return -1;
        } else if (firstOccurrenceDayA > firstOccurrenceDayB) {
          return 1;
        } else {
          if (firstOccurrenceStartPeriodA < firstOccurrenceStartPeriodB) {
            return -1;
          } else if (
            firstOccurrenceStartPeriodA > firstOccurrenceStartPeriodB
          ) {
            return 1;
          } else {
            return 0;
          }
        }
      });
    default:
      return addedCourses;
  }
};
