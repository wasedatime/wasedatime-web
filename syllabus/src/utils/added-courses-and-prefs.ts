import SortingOption from "../constants/sorting-options";
import { SyllabusKey } from "../constants/syllabus-data";

export const sortAddedCoursesAndPrefs = (
  addedCoursesAndPrefs,
  sortingOption
) => {
  switch (sortingOption) {
    case SortingOption.ADDED_ORDER:
      return addedCoursesAndPrefs;
    case SortingOption.COURSE_TITLE:
      return addedCoursesAndPrefs.sort((a, b) => {
        // ignore upper and lowercase
        const courseTitleA = a.course[SyllabusKey.TITLE].toUpperCase();
        const courseTitleB = b.course[SyllabusKey.TITLE].toUpperCase();
        if (courseTitleA < courseTitleB) {
          return -1;
        } else if (courseTitleA > courseTitleB) {
          return 1;
        } else {
          return 0;
        }
      });
    case SortingOption.COURSE_TIME:
      return addedCoursesAndPrefs.sort((a, b) => {
        const firstOccA = a.course[SyllabusKey.OCCURRENCES][0];
        const firstOccB = b.course[SyllabusKey.OCCURRENCES][0];
        if (!firstOccA && !firstOccB) return 0;
        if (firstOccA && !firstOccB) return 1;
        if (!firstOccA && firstOccB) return -1;

        const firstOccurrenceDayA = firstOccA[SyllabusKey.OCC_DAY];
        const firstOccurrenceDayB = firstOccB[SyllabusKey.OCC_DAY];

        const firstOccurrencePeriodA = firstOccA[SyllabusKey.OCC_PERIOD];
        const firstOccurrenceStartPeriodA =
          firstOccurrencePeriodA > 9
            ? Math.floor(firstOccurrencePeriodA / 10)
            : firstOccurrencePeriodA % 10;
        const firstOccurrencePeriodB = firstOccB[SyllabusKey.OCC_PERIOD];
        const firstOccurrenceStartPeriodB =
          firstOccurrencePeriodB > 9
            ? Math.floor(firstOccurrencePeriodB / 10)
            : firstOccurrencePeriodB % 10;

        // one of the courses has OCC_DAY === -1
        if (firstOccurrenceDayA >= 0 && firstOccurrenceDayB < 0) {
          return -1;
        } else if (firstOccurrenceDayA < 0 && firstOccurrenceDayB >= 0) {
          return 1;
        }

        // compare days (if both courses have OCC_DAY >= 0)
        if (firstOccurrenceDayA < firstOccurrenceDayB) {
          return -1;
        } else if (firstOccurrenceDayA > firstOccurrenceDayB) {
          return 1;
        }
        
        // compare periods (if days are the same)
        if (firstOccurrenceStartPeriodA < firstOccurrenceStartPeriodB) {
          return -1;
        } else if (
          firstOccurrenceStartPeriodA > firstOccurrenceStartPeriodB
        ) {
          return 1;
        } else {
          return 0;
        }
      });
    default:
      return addedCoursesAndPrefs;
  }
};
