import { SyllabusKey } from "@bit/wasedatime.syllabus.ts.constants.syllabus-data";
import Course from "../types/course";

const filterCourses = (
  filterGroups: { [filterName: string]: any }, //todo use enum
  courses: Course[]
): Course[] => {
  let filteredCourses = courses;
  for (const filterName in filterGroups) {
    const filters = filterGroups[filterName];
    switch (filterName) {
      case "semester":
        filteredCourses = filteredCourses.filter((course) =>
          filters.some((filter) => course[SyllabusKey.TERM].includes(filter))
        );
        break;
      case "school":
        filteredCourses = filteredCourses.filter((course) =>
          filters.includes(course[SyllabusKey.SCHOOL])
        );
        break;
      case "lang":
        if (filters.length !== 10) {
          filteredCourses = filteredCourses.filter(
            (course) =>
              course[SyllabusKey.LANG]
                .toString()
                .split(",")
                .filter((l) => filters.includes(l)).length > 0
          );
        }
        break;
      case "day":
        if (filters.length !== 6) {
          filteredCourses = filteredCourses.filter((course) => {
            const occurrences = course[SyllabusKey.OCCURRENCES];
            return occurrences.some((occ) =>
              filters.includes(occ[SyllabusKey.OCC_DAY].toString())
            );
          });
        }
        break;
      case "period":
        if (filters.length !== 7) {
          filteredCourses = filteredCourses.filter((course) => {
            const occurrences = course[SyllabusKey.OCCURRENCES];
            for (const filter of filters) {
              const period = parseInt(filter, 10);
              for (const occ of occurrences) {
                const op = occ[SyllabusKey.OCC_PERIOD];
                const start = (op / 10) | 0;
                const end = op % 10;
                if (op > 9 && start <= period && period <= end) return true;
                if (op <= 9 && op === period) return true;
              }
            }
            return false;
          });
        }
        break;
      case "minYear":
        if (filters.length === 4) continue;
        filteredCourses = filteredCourses.filter((course) =>
          filters.includes(course[SyllabusKey.MIN_YEAR].toString())
        );
        break;
      case "credit":
        if (filters.length === 3) continue;
        filteredCourses = filteredCourses.filter((course) =>
          course[SyllabusKey.CREDIT] >= 3
            ? filters.includes("3")
            : filters.includes(course[SyllabusKey.CREDIT].toString())
        );
        break;
      case "evalType":
        break;
      case "evalPercent":
        if (filters[0] === 0 && filters[1] === 100) continue;
        filteredCourses = filteredCourses.filter((course) => {
          if (course[SyllabusKey.EVAL].length === 0) return true;
          // Check if the target evaluation item (e.g. 'exam') is included in the evaluation of this course
          const targetEval = course[SyllabusKey.EVAL].filter(
            (e) => e[SyllabusKey.EVAL_TYPE] === filterGroups["evalType"]
          )[0];
          // If the target evaluation item (e.g. 'exam') is included, check if its percentage is in the range of the filter
          // If it is included, return the course; if not included, check if the eval filter includes 0
          // If yes, return the course
          return targetEval
            ? targetEval[SyllabusKey.EVAL_PERCENT] >= filters[0] &&
                targetEval[SyllabusKey.EVAL_PERCENT] <= filters[1]
            : filters[0] === 0;
        });
        break;
      case "evalSpecial":
        filteredCourses = filteredCourses.filter((course) => {
          var isFiltered = true;
          ["noExam", "noPaper", "noClassParticipation"].forEach((filter, i) => {
            if (filters.includes(filter)) {
              var targetEval = course[SyllabusKey.EVAL].filter(
                (e) => e[SyllabusKey.EVAL_TYPE] === i
              )[0];
              if (
                targetEval !== undefined &&
                targetEval[SyllabusKey.EVAL_PERCENT] > 0
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
          filters.includes(course[SyllabusKey.TYPE].toString())
        );
        break;
      case "level":
        if (filters.length === 6) continue;
        filteredCourses = filteredCourses.filter((course) =>
          filters.includes(course[SyllabusKey.LEVEL].toString())
        );
        break;
      default:
        break;
    }
  }
  return filteredCourses;
};

export default filterCourses;
