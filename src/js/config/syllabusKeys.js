export const SYLLABUS_KEYS = Object.freeze({
  ID: "a",
  TITLE: "b",
  TITLE_JP: "c",
  INSTRUCTOR: "d",
  INSTRUCTOR_JP: "e",
  LANG: "f",
  TYPE: "g",
  TERM: "h",
  OCCURRENCES: "i",
  MIN_YEAR: "j",
  CATEGORY: "k",
  CATEGORY_JP: "q",
  CREDIT: "l",
  LEVEL: "m",
  EVAL: "n",
  CODE: "o",
  SUBTITLE: "p",
  SCHOOL: "r",
  OCC_DAY: "d",
  OCC_PERIOD: "p",
  OCC_LOCATION: "l",
  EVAL_TYPE: "t",
  EVAL_PERCENT: "p",
  EVAL_CRITERIA: "c",
});

export const SYLLABUS_ATTR = Object.freeze({
  a: "id",
  b: "title",
  c: "title_jp",
  d: "instructor",
  e: "instructor_jp",
  f: "lang",
  g: "type",
  h: "term",
  i: "occurrences",
  j: "min_year",
  k: "category",
  q: "category_jp",
  l: "credit",
  m: "level",
  n: "eval",
  o: "code",
  p: "subtitle",
  r: "school",
});

export const SYLLABUS_OCC_ATTR = Object.freeze({
  d: "day",
  p: "period",
  l: "location",
});

export const SYLLABUS_EVAL_ATTR = Object.freeze({
  t: "type",
  p: "percent",
  c: "criteria",
});

export default SYLLABUS_KEYS;
