import { ADDED_ORDER, COURSE_TITLE, COURSE_TIME } from "../data/sortingOptions";

export const sortAddedCoursesAndPrefs = (
  addedCoursesAndPrefs,
  sortingOption
) => {
  switch (sortingOption) {
    case ADDED_ORDER:
      return addedCoursesAndPrefs;
    case COURSE_TITLE:
      return addedCoursesAndPrefs.sort((a, b) => {
        // ignore upper and lowercase
        const courseTitleA = a.course.t.toUpperCase();
        const courseTitleB = b.course.t.toUpperCase();
        if (courseTitleA < courseTitleB) {
          return -1;
        } else if (courseTitleA > courseTitleB) {
          return 1;
        } else {
          return 0;
        }
      });
    case COURSE_TIME:
      return addedCoursesAndPrefs.sort((a, b) => {
        const firstOccurrenceDayA = a.course.os[0].day;
        const firstOccurrenceDayB = b.course.os[0].day;
        const firstOccurrenceStartPeriodA = a.course.os[0].start_period;
        const firstOccurrenceStartPeriodB = b.course.os[0].start_period;
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
      return addedCoursesAndPrefs;
  }
};
