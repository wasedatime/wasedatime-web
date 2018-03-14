const mongoose = require('mongoose');
const { Schema } = mongoose;

// Need to declare _id new property and disable the original _id (set it to false)
const courseSimplifiedSchema = new Schema({
  _id: String,
  title: String,
  instructor: String,
  year: String,
  term: String,
  schools: Array
}, { _id: false });

module.exports = mongoose.model(
  'CourseSimplified',
  courseSimplifiedSchema,
  'entire_2018_courses_sci_eng_search'
);
