import { ADDED_ORDER, COURSE_TITLE, COURSE_TIME } from "../data/sortingOptions";

export const sortAddedCourses = (addedCourses, sortingOption) => {
  switch (sortingOption) {
    case ADDED_ORDER:
      return addedCourses;
    case COURSE_TITLE:
      return addedCourses.sort((a, b) => {
        // ignore upper and lowercase
        const courseTitleA = a.title.toUpperCase();
        const courseTitleB = b.title.toUpperCase();
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
        const firstOccurrenceDayA = a.occurrences[0].day;
        const firstOccurrenceDayB = b.occurrences[0].day;
        const firstOccurrenceStartPeriodA = a.occurrences[0].start_period;
        const firstOccurrenceStartPeriodB = b.occurrences[0].start_period;
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
