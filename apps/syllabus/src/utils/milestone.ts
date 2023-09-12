import { SyllabusKey } from "@app/constants/syllabus-data"

export const parseCourse = (course, school) => ({
  [SyllabusKey.SCHOOL]: school,
  [SyllabusKey.INSTRUCTOR]: course.instructor,
  [SyllabusKey.INSTRUCTOR_JP]: course.instructor_jp,
  [SyllabusKey.LANG]: course.lang,
  [SyllabusKey.MODALITY]: course.mod,
  [SyllabusKey.OCCURRENCES]: course.occ,
  [SyllabusKey.TERM]: course.sem,
  [SyllabusKey.TITLE]: course.title,
  [SyllabusKey.TITLE_JP]: course.title_jp,
  [SyllabusKey.CATEGORY]: course.cat,
  [SyllabusKey.TYPE]: course.type,
  [SyllabusKey.LEVEL]: course.lvl,
  reviews: course.reviews.map((r) => {
    const review = r.Item || r

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
      year: parseInt(review.year.N),
    }
  }),
})
