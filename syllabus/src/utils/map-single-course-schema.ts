import schoolCodeMap from "../constants/school-code";
import {
  SyllabusKey,
  SyllabusAttr,
  SyllabusEvalAttr,
} from "../constants/syllabus-data";

export const courseSchemaFullToShort = (course) => {
  const occs = course[SyllabusAttr[SyllabusKey.OCCURRENCES]].map((occ) => ({
    [SyllabusKey.OCC_DAY]: occ[SyllabusKey.OCC_DAY],
    [SyllabusKey.OCC_PERIOD]: occ[SyllabusKey.OCC_PERIOD],
    [SyllabusKey.OCC_LOCATION]: occ[SyllabusKey.OCC_LOCATION],
  }));
  const evals = course[SyllabusAttr[SyllabusKey.EVAL]].map((e) => ({
    [SyllabusKey.EVAL_TYPE]: e[SyllabusEvalAttr[SyllabusKey.EVAL_TYPE]],
    [SyllabusKey.EVAL_PERCENT]: e[SyllabusEvalAttr[SyllabusKey.EVAL_PERCENT]],
    [SyllabusKey.EVAL_CRITERIA]: e[SyllabusEvalAttr[SyllabusKey.EVAL_CRITERIA]],
  }));
  return {
    [SyllabusKey.ID]: course[SyllabusAttr[SyllabusKey.ID]],
    [SyllabusKey.TITLE]: course[SyllabusAttr[SyllabusKey.TITLE]],
    [SyllabusKey.TITLE_JP]: course[SyllabusAttr[SyllabusKey.TITLE_JP]],
    [SyllabusKey.INSTRUCTOR]: course[SyllabusAttr[SyllabusKey.INSTRUCTOR]],
    [SyllabusKey.INSTRUCTOR_JP]:
      course[SyllabusAttr[SyllabusKey.INSTRUCTOR_JP]],
    [SyllabusKey.LANG]: course[SyllabusAttr[SyllabusKey.LANG]],
    [SyllabusKey.TYPE]: course[SyllabusAttr[SyllabusKey.TYPE]],
    [SyllabusKey.TERM]: course[SyllabusAttr[SyllabusKey.TERM]],
    [SyllabusKey.MIN_YEAR]: course[SyllabusAttr[SyllabusKey.MIN_YEAR]],
    [SyllabusKey.CATEGORY]: course[SyllabusAttr[SyllabusKey.CATEGORY]],
    [SyllabusKey.CATEGORY_JP]: course[SyllabusAttr[SyllabusKey.CATEGORY_JP]],
    [SyllabusKey.CREDIT]: course[SyllabusAttr[SyllabusKey.CREDIT]],
    [SyllabusKey.LEVEL]: course[SyllabusAttr[SyllabusKey.LEVEL]],
    [SyllabusKey.CODE]: course[SyllabusAttr[SyllabusKey.CODE]],
    [SyllabusKey.SUBTITLE]: course[SyllabusAttr[SyllabusKey.SUBTITLE]],
    [SyllabusKey.SCHOOL]:
      course[SyllabusAttr[SyllabusKey.SCHOOL]] ||
      schoolCodeMap[course[SyllabusAttr[SyllabusKey.ID]].substring(0, 2)],
    [SyllabusKey.OCCURRENCES]: occs,
    [SyllabusKey.EVAL]: evals,
    [SyllabusKey.MODALITY]: course[SyllabusAttr[SyllabusKey.MODALITY]],
    obj: course.obj,
    outline: course.outline,
    schedule: course.schedule,
    ref: course.ref,
    text: course.text,
  };
};
