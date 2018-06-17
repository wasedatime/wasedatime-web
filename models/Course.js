const mongoose = require('mongoose');
const { Schema } = mongoose;

// Need to declare _id new property and disable the original _id (set it to false)
const courseSchema = new Schema({
  _id: String,
  title: String,
  instructor: String,
  year: String,
  term: String,
  school: String,
  occurrences: [
    {
      day: Number,
      start_period: String,
      end_period: String,
      start_time: Number,
      end_time: Number,
      building: String,
      classroom: String,
      location: String
    }
  ],
  code: String
}, { _id: false });

module.exports = mongoose.model(
  'Course',
  courseSchema,
  'entire_2018_courses_all'
);
