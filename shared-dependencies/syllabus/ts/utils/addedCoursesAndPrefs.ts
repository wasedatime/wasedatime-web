import {
  ADDED_ORDER,
  COURSE_TITLE,
  COURSE_TIME,
} from "@bit/wasedatime.syllabus.ts.constants.sorting-options";
import { SYLLABUS_KEYS } from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";

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
        const courseTitleA = a.course[SYLLABUS_KEYS.TITLE].toUpperCase();
        const courseTitleB = b.course[SYLLABUS_KEYS.TITLE].toUpperCase();
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
        const firstOccurrenceDayA =
          a.course[SYLLABUS_KEYS.OCCURRENCES][0][SYLLABUS_KEYS.OCC_DAY];
        const firstOccurrenceDayB =
          b.course[SYLLABUS_KEYS.OCCURRENCES][0][SYLLABUS_KEYS.OCC_DAY];

        const firstOccurrencePeriodA =
          a.course[SYLLABUS_KEYS.OCCURRENCES][0][SYLLABUS_KEYS.OCC_PERIOD];
        const firstOccurrenceStartPeriodA =
          firstOccurrencePeriodA > 9
            ? Math.floor(firstOccurrencePeriodA / 10)
            : firstOccurrencePeriodA % 10;
        const firstOccurrencePeriodB =
          b.course[SYLLABUS_KEYS.OCCURRENCES][0][SYLLABUS_KEYS.OCC_PERIOD];
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
      return addedCoursesAndPrefs;
  }
};
