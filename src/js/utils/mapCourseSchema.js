import {
  SYLLABUS_KEYS,
  SYLLABUS_ATTR,
  SYLLABUS_OCC_ATTR,
  SYLLABUS_EVAL_ATTR,
} from "../config/syllabusKeys";
import { schoolCodeMap } from "../data/schoolCodeMap";

export const courseSchemaFullToShort = (course) => {
  const occs = course[SYLLABUS_ATTR[SYLLABUS_KEYS.OCCURRENCES]].map((occ) => ({
    [SYLLABUS_KEYS.OCC_DAY]: occ[SYLLABUS_OCC_ATTR[SYLLABUS_KEYS.OCC_DAY]],
    [SYLLABUS_KEYS.OCC_PERIOD]:
      occ[SYLLABUS_OCC_ATTR[SYLLABUS_KEYS.OCC_PERIOD]],
    [SYLLABUS_KEYS.OCC_LOCATION]:
      occ[SYLLABUS_OCC_ATTR[SYLLABUS_KEYS.OCC_LOCATION]],
  }));
  const evals = course[SYLLABUS_ATTR[SYLLABUS_KEYS.EVAL]].map((e) => ({
    [SYLLABUS_KEYS.EVAL_TYPE]: e[SYLLABUS_EVAL_ATTR[SYLLABUS_KEYS.EVAL_TYPE]],
    [SYLLABUS_KEYS.EVAL_PERCENT]:
      e[SYLLABUS_EVAL_ATTR[SYLLABUS_KEYS.EVAL_PERCENT]],
    [SYLLABUS_KEYS.EVAL_CRITERIA]:
      e[SYLLABUS_EVAL_ATTR[SYLLABUS_KEYS.EVAL_CRITERIA]],
  }));
  return {
    [SYLLABUS_KEYS.ID]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.ID]],
    [SYLLABUS_KEYS.TITLE]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.TITLE]],
    [SYLLABUS_KEYS.TITLE_JP]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.TITLE_JP]],
    [SYLLABUS_KEYS.INSTRUCTOR]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.INSTRUCTOR]],
    [SYLLABUS_KEYS.INSTRUCTOR_JP]:
      course[SYLLABUS_ATTR[SYLLABUS_KEYS.INSTRUCTOR_JP]],
    [SYLLABUS_KEYS.LANG]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.LANG]],
    [SYLLABUS_KEYS.TYPE]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.TYPE]],
    [SYLLABUS_KEYS.TERM]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.TERM]],
    [SYLLABUS_KEYS.MIN_YEAR]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.MIN_YEAR]],
    [SYLLABUS_KEYS.CATEGORY]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.CATEGORY]],
    [SYLLABUS_KEYS.CATEGORY_JP]:
      course[SYLLABUS_ATTR[SYLLABUS_KEYS.CATEGORY_JP]],
    [SYLLABUS_KEYS.CREDIT]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.CREDIT]],
    [SYLLABUS_KEYS.LEVEL]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.LEVEL]],
    [SYLLABUS_KEYS.CODE]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.CODE]],
    [SYLLABUS_KEYS.SUBTITLE]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.SUBTITLE]],
    [SYLLABUS_KEYS.SCHOOL]: course[SYLLABUS_ATTR[SYLLABUS_KEYS.SCHOOL]] || schoolCodeMap[course[SYLLABUS_ATTR[SYLLABUS_KEYS.ID]].substring(0, 2)],
    [SYLLABUS_KEYS.OCCURRENCES]: occs,
    [SYLLABUS_KEYS.EVAL]: evals,
  };
};

export const courseSchemaShortToFull = (course) => {
  const occs = course[SYLLABUS_ATTR[SYLLABUS_KEYS.OCCURRENCES]].map((occ) => ({
    [SYLLABUS_OCC_ATTR[SYLLABUS_KEYS.OCC_DAY]]: occ[SYLLABUS_KEYS.OCC_DAY],
    [SYLLABUS_OCC_ATTR[SYLLABUS_KEYS.OCC_PERIOD]]:
      occ[SYLLABUS_KEYS.OCC_PERIOD],
    [SYLLABUS_OCC_ATTR[SYLLABUS_KEYS.OCC_LOCATION]]:
      occ[SYLLABUS_KEYS.OCC_LOCATION],
  }));
  const evals = course[SYLLABUS_KEYS.EVAL].map((e) => ({
    [SYLLABUS_EVAL_ATTR[SYLLABUS_KEYS.EVAL_TYPE]]: e[SYLLABUS_KEYS.EVAL_TYPE],
    [SYLLABUS_EVAL_ATTR[SYLLABUS_KEYS.EVAL_PERCENT]]:
      e[SYLLABUS_KEYS.EVAL_PERCENT],
    [SYLLABUS_EVAL_ATTR[SYLLABUS_KEYS.EVAL_CRITERIA]]:
      e[SYLLABUS_KEYS.EVAL_CRITERIA],
  }));
  return {
    [SYLLABUS_ATTR[SYLLABUS_KEYS.ID]]: course[SYLLABUS_KEYS.ID],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.TITLE]]: course[SYLLABUS_KEYS.TITLE],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.TITLE_JP]]: course[SYLLABUS_KEYS.TITLE_JP],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.INSTRUCTOR]]: course[SYLLABUS_KEYS.INSTRUCTOR],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.INSTRUCTOR_JP]]:
      course[SYLLABUS_KEYS.INSTRUCTOR_JP],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.LANG]]: course[SYLLABUS_KEYS.LANG],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.TYPE]]: course[SYLLABUS_KEYS.TYPE],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.TERM]]: course[SYLLABUS_KEYS.TERM],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.MIN_YEAR]]: course[SYLLABUS_KEYS.MIN_YEAR],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.CATEGORY]]: course[SYLLABUS_KEYS.CATEGORY],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.CATEGORY_JP]]:
      course[SYLLABUS_KEYS.CATEGORY_JP],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.CREDIT]]: course[SYLLABUS_KEYS.CREDIT],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.LEVEL]]: course[SYLLABUS_KEYS.LEVEL],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.CODE]]: course[SYLLABUS_KEYS.CODE],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.SUBTITLE]]: course[SYLLABUS_KEYS.SUBTITLE],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.SCHOOL]]: course[SYLLABUS_KEYS.SCHOOL],
    [SYLLABUS_ATTR[SYLLABUS_KEYS.OCCURRENCES]]: occs,
    [SYLLABUS_ATTR[SYLLABUS_KEYS.EVAL]]: evals,
  };
};

export default courseSchemaFullToShort;
