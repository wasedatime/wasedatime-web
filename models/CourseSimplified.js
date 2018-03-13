const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSimplifiedSchema = new Schema({
  _id: String,
  title: String,
  instructor: String,
  year: String,
  term: String,
  schools: Array
});

module.exports = mongoose.model(
  'CourseSimplified',
  courseSimplifiedSchema,
  'entire_2018_courses_sci_eng_search'
);
