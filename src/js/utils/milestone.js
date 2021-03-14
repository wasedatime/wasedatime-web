import { SYLLABUS_KEYS } from "../config/syllabusKeys";

export const parseCourse = (course, school) => ({
  [SYLLABUS_KEYS.SCHOOL]: school,
  [SYLLABUS_KEYS.INSTRUCTOR]: course.instructor,
  [SYLLABUS_KEYS.INSTRUCTOR_JP]: course.instructor_jp,
  [SYLLABUS_KEYS.LANG]: course.lang,
  [SYLLABUS_KEYS.OCCURRENCES]: course.occ,
  [SYLLABUS_KEYS.TERM]: course.sem,
  [SYLLABUS_KEYS.TITLE]: course.title,
  [SYLLABUS_KEYS.TITLE_JP]: course.title_jp,
  [SYLLABUS_KEYS.CATEGORY]: course.cat,
  [SYLLABUS_KEYS.TYPE]: course.type,
  [SYLLABUS_KEYS.LEVEL]: course.lvl,
  reviews: course.reviews.map(r => {
    const review = r.Item || r;
    return {
      benefit: parseInt(review.benefit.N),
      comment_en: review.comment_en.S,
      comment_ja: review.comment_ja.S,
      comment_ko: review.comment_ko.S,
      "comment_zh-CN": review["comment_zh-CN"].S,
      "comment_zh-TW": review["comment_zh-TW"].S,
      course_key: review.course_key.S,
      created_at: review.created_at.S,
      difficulty: parseInt(review.difficulty.N),
      instructor: review.instructor.S,
      instructor_jp: review.instructor_jp.S,
      satisfaction: parseInt(review.satisfaction.N),
      src_lang: review.src_lang.S,
      title: review.title.S,
      title_jp: review.title_jp.S,
      uid: "",
      updated_at: review.updated_at.S,
      year: parseInt(review.year.N)
    }
  })
})