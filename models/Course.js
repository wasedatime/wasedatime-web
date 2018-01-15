const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
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
});

module.exports = mongoose.model(
  'Course',
  courseSchema,
  '2017ALL_courses_sci_eng'
);
