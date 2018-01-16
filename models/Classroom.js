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

module.exports = (function() {
  mongoose.model(
    'ClassroomAll',
    classroomSchema,
    '2017F_classrooms_sci_eng_all'
  );

  mongoose.model(
    'ClassroomMon',
    classroomSchema,
    '2017F_classrooms_sci_eng_mon'
  );

  mongoose.model(
    'ClassroomTue',
    classroomSchema,
    '2017F_classrooms_sci_eng_tue'
  );

  mongoose.model(
    'ClassroomWed',
    classroomSchema,
    '2017F_classrooms_sci_eng_wed'
  );

  mongoose.model(
    'ClassroomThur',
    classroomSchema,
    '2017F_classrooms_sci_eng_thur'
  );

  mongoose.model(
    'ClassroomFri',
    classroomSchema,
    '2017F_classrooms_sci_eng_fri'
  );
})();
