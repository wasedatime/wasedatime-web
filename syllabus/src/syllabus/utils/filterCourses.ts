import { SYLLABUS_KEYS } from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";

const filterCourses = (
  filterGroups: { [filterName: string]: any },
  courses: { [key: string]: any }[]
): { [key: string]: any }[] => {
  let filteredCourses = courses;
  for (const filterName in filterGroups) {
    const filters = filterGroups[filterName];
    switch (filterName) {
      case "semester":
        filteredCourses = filteredCourses.filter((course) =>
          filters.some((filter) => course[SYLLABUS_KEYS.TERM].includes(filter))
        );
        break;
      case "school":
        if (filters.length === 6) continue;
        filteredCourses = filteredCourses.filter((course) =>
          filters.includes(course[SYLLABUS_KEYS.SCHOOL])
        );
        break;
      case "lang":
        if (filters.length === 10) continue;
        filteredCourses = filteredCourses.filter(
          (course) =>
            course[SYLLABUS_KEYS.LANG]
              .toString()
              .split(",")
              .filter((l) => filters.includes(l)).length > 0
        );
        break;
      case "day":
        if (filters.length === 6) continue;
        filteredCourses = filteredCourses.filter((course) => {
          const occurrences = course[SYLLABUS_KEYS.OCCURRENCES];
          for (let i = 0; i < occurrences.length; i++) {
            if (
              filters.includes(occurrences[i][SYLLABUS_KEYS.OCC_DAY].toString())
            )
              return true;
          }
          return false;
        });
        break;
      case "period":
        if (filters.length === 7) continue;
        filteredCourses = filteredCourses.filter((course) => {
          const occurrences = course[SYLLABUS_KEYS.OCCURRENCES];

          for (let i = 0; i < filters.length; i++) {
            const period = parseInt(filters[i], 10);
            for (let j = 0; j < occurrences.length; j++) {
              const op = occurrences[j][SYLLABUS_KEYS.OCC_PERIOD];
              // fix me!
              if (op > 9) {
                const start = (op / 10) | 0;
                const end = op % 10;
                if (start <= period && period <= end) return true;
              } else {
                if (op === period) return true;
              }
            }
          }
          return false;
        });
        break;
      case "minYear":
        if (filters.length === 4) continue;
        filteredCourses = filteredCourses.filter((course) =>
          filters.includes(course[SYLLABUS_KEYS.MIN_YEAR].toString())
        );
        break;
      case "credit":
        if (filters.length === 3) continue;
        filteredCourses = filteredCourses.filter((course) =>
          course[SYLLABUS_KEYS.CREDIT] >= 3
            ? filters.includes("3")
            : filters.includes(course[SYLLABUS_KEYS.CREDIT].toString())
        );
        break;
      case "evalType":
        break;
      case "evalPercent":
        if (filters[0] === 0 && filters[1] === 100) continue;
        filteredCourses = filteredCourses.filter((course) => {
          if (course[SYLLABUS_KEYS.EVAL].length === 0) return true;
          // Check if the target evaluation item (e.g. 'exam') is included in the evaluation of this course
          const targetEval = course[SYLLABUS_KEYS.EVAL].filter(
            (e) => e[SYLLABUS_KEYS.EVAL_TYPE] === filterGroups["evalType"]
          )[0];
          // If the target evaluation item (e.g. 'exam') is included, check if its percentage is in the range of the filter
          // If it is included, return the course; if not included, check if the eval filter includes 0
          // If yes, return the course
          return targetEval
            ? targetEval[SYLLABUS_KEYS.EVAL_PERCENT] >= filters[0] &&
                targetEval[SYLLABUS_KEYS.EVAL_PERCENT] <= filters[1]
            : filters[0] === 0;
        });
        break;
      case "evalSpecial":
        filteredCourses = filteredCourses.filter((course) => {
          var isFiltered = true;
          ["noExam", "noPaper", "noClassParticipation"].forEach((filter, i) => {
            if (filters.includes(filter)) {
              var targetEval = course[SYLLABUS_KEYS.EVAL].filter(
                (e) => e[SYLLABUS_KEYS.EVAL_TYPE] === i
              )[0];
              if (
                targetEval !== undefined &&
                targetEval[SYLLABUS_KEYS.EVAL_PERCENT] > 0
              )
                isFiltered = false;
            }
          });
          return isFiltered;
        });
        break;
      case "type":
        if (filters.length === 9) continue;
        filteredCourses = filteredCourses.filter((course) =>
          filters.includes(course[SYLLABUS_KEYS.TYPE].toString())
        );
        break;
      case "level":
        if (filters.length === 6) continue;
        filteredCourses = filteredCourses.filter((course) =>
          filters.includes(course[SYLLABUS_KEYS.LEVEL].toString())
        );
        break;
      default:
        break;
    }
  }
  return filteredCourses;
};

export default filterCourses;
