const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSimplifiedSchema = new Schema({
  title: String,
  instructor: String
});

module.exports = mongoose.model(
  'CourseSimplified',
  courseSimplifiedSchema,
  '2017F_courses_sci_eng_search_simple_sorted'
);
