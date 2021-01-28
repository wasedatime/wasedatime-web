import {
  ADDED_ORDER,
  COURSE_TITLE,
  COURSE_TIME,
} from "@bit/wasedatime.shared-library-js.constants.sorting-options";
import { SYLLABUS_KEYS } from "@bit/wasedatime.shared-library-js.constants.syllabus-keys";

export const sortAddedCourses = (addedCourses, sortingOption) => {
  switch (sortingOption) {
    case ADDED_ORDER:
      return addedCourses;
    case COURSE_TITLE:
      return addedCourses.sort((a, b) => {
        // ignore upper and lowercase
        const courseTitleA = a[SYLLABUS_KEYS.TITLE].toUpperCase();
        const courseTitleB = b[SYLLABUS_KEYS.TITLE].toUpperCase();
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
        const firstOccurrenceDayA =
          a[SYLLABUS_KEYS.OCCURRENCES][0][SYLLABUS_KEYS.OCC_DAY];
        const firstOccurrenceDayB =
          b[SYLLABUS_KEYS.OCCURRENCES][0][SYLLABUS_KEYS.OCC_DAY];

        const firstOccurrencePeriodA =
          a[SYLLABUS_KEYS.OCCURRENCES][0][SYLLABUS_KEYS.OCC_PERIOD];
        const firstOccurrenceStartPeriodA =
          firstOccurrencePeriodA > 9
            ? Math.floor(firstOccurrencePeriodA / 10)
            : firstOccurrencePeriodA % 10;
        const firstOccurrencePeriodB =
          b[SYLLABUS_KEYS.OCCURRENCES][0][SYLLABUS_KEYS.OCC_PERIOD];
        const firstOccurrenceStartPeriodB =
          firstOccurrencePeriodB > 9
            ? Math.floor(firstOccurrencePeriodB / 10)
            : firstOccurrencePeriodB % 10;

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
