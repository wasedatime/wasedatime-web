import schoolCodeMap from "@bit/wasedatime.syllabus.ts.constants.school-code";
import { SyllabusKey } from "@bit/wasedatime.syllabus.ts.constants.syllabus-data";

const SYLLABUS_ATTR = Object.freeze({
  a: "id",
  b: "title",
  c: "title_jp",
  d: "instructor",
  e: "instructor_jp",
  f: "lang",
  g: "type",
  h: "term",
  i: "occ",
  j: "year",
  k: "cat",
  l: "cred",
  m: "lvl",
  n: "eval",
  o: "code",
  p: "sub",
  q: "cat_jp",
  r: "mod",
  school: "school",
  obj: "obj",
  outline: "outline",
  schedule: "schedule",
  ref: "ref",
  text: "text",
});

// export const SYLLABUS_OCC_ATTR = Object.freeze({
//   d: "day",
//   p: "period",
//   l: "location",
// });

const SYLLABUS_EVAL_ATTR = Object.freeze({
  t: "type",
  p: "percent",
  c: "criteria",
});

export const courseSchemaFullToShort = (course) => {
  const occs = course[SYLLABUS_ATTR[SyllabusKey.OCCURRENCES]].map((occ) => ({
    [SyllabusKey.OCC_DAY]: occ[SyllabusKey.OCC_DAY],
    [SyllabusKey.OCC_PERIOD]: occ[SyllabusKey.OCC_PERIOD],
    [SyllabusKey.OCC_LOCATION]: occ[SyllabusKey.OCC_LOCATION],
  }));
  const evals = course[SYLLABUS_ATTR[SyllabusKey.EVAL]].map((e) => ({
    [SyllabusKey.EVAL_TYPE]: e[SYLLABUS_EVAL_ATTR[SyllabusKey.EVAL_TYPE]],
    [SyllabusKey.EVAL_PERCENT]: e[SYLLABUS_EVAL_ATTR[SyllabusKey.EVAL_PERCENT]],
    [SyllabusKey.EVAL_CRITERIA]:
      e[SYLLABUS_EVAL_ATTR[SyllabusKey.EVAL_CRITERIA]],
  }));
  return {
    [SyllabusKey.ID]: course[SYLLABUS_ATTR[SyllabusKey.ID]],
    [SyllabusKey.TITLE]: course[SYLLABUS_ATTR[SyllabusKey.TITLE]],
    [SyllabusKey.TITLE_JP]: course[SYLLABUS_ATTR[SyllabusKey.TITLE_JP]],
    [SyllabusKey.INSTRUCTOR]: course[SYLLABUS_ATTR[SyllabusKey.INSTRUCTOR]],
    [SyllabusKey.INSTRUCTOR_JP]:
      course[SYLLABUS_ATTR[SyllabusKey.INSTRUCTOR_JP]],
    [SyllabusKey.LANG]: course[SYLLABUS_ATTR[SyllabusKey.LANG]],
    [SyllabusKey.TYPE]: course[SYLLABUS_ATTR[SyllabusKey.TYPE]],
    [SyllabusKey.TERM]: course[SYLLABUS_ATTR[SyllabusKey.TERM]],
    [SyllabusKey.MIN_YEAR]: course[SYLLABUS_ATTR[SyllabusKey.MIN_YEAR]],
    [SyllabusKey.CATEGORY]: course[SYLLABUS_ATTR[SyllabusKey.CATEGORY]],
    [SyllabusKey.CATEGORY_JP]: course[SYLLABUS_ATTR[SyllabusKey.CATEGORY_JP]],
    [SyllabusKey.CREDIT]: course[SYLLABUS_ATTR[SyllabusKey.CREDIT]],
    [SyllabusKey.LEVEL]: course[SYLLABUS_ATTR[SyllabusKey.LEVEL]],
    [SyllabusKey.CODE]: course[SYLLABUS_ATTR[SyllabusKey.CODE]],
    [SyllabusKey.SUBTITLE]: course[SYLLABUS_ATTR[SyllabusKey.SUBTITLE]],
    [SyllabusKey.SCHOOL]:
      course[SYLLABUS_ATTR[SyllabusKey.SCHOOL]] ||
      schoolCodeMap[course[SYLLABUS_ATTR[SyllabusKey.ID]].substring(0, 2)],
    [SyllabusKey.OCCURRENCES]: occs,
    [SyllabusKey.EVAL]: evals,
    [SyllabusKey.MODALITY]: course[SYLLABUS_ATTR[SyllabusKey.MODALITY]],
    obj: course.obj,
    outline: course.outline,
    schedule: course.schedule,
    ref: course.ref,
    text: course.text,
  };
};
