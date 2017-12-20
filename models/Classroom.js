const mongoose = require('mongoose');

const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const classroomSchema = new Schema({
  name: String,
  building: String,
  courses: [
    {
      id: ObjectId,
      title: String,
      occurrences: [
        {
          day: Number,
          start_period: String,
          end_period: String,
          start_time: Number,
          end_time: Number
        }
      ]
    }
  ]
});

module.exports = mongoose.model(
  'Classroom',
  classroomSchema,
  'classrooms_fund_eng_eng'
);
