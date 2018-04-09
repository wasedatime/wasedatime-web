const mongoose = require('mongoose');

const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const classroomSchema = new Schema({
  name: String,
  building: String,
  courses: [
    {
      id: String,
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
    'spr_first_half_2018_classrooms_sci_eng_all'
  );

  mongoose.model(
    'ClassroomMon',
    classroomSchema,
    'spr_first_half_2018_classrooms_sci_eng_mon'
  );

  mongoose.model(
    'ClassroomTue',
    classroomSchema,
    'spr_first_half_2018_classrooms_sci_eng_tue'
  );

  mongoose.model(
    'ClassroomWed',
    classroomSchema,
    'spr_first_half_2018_classrooms_sci_eng_wed'
  );

  mongoose.model(
    'ClassroomThur',
    classroomSchema,
    'spr_first_half_2018_classrooms_sci_eng_thur'
  );

  mongoose.model(
    'ClassroomFri',
    classroomSchema,
    'spr_first_half_2018_classrooms_sci_eng_fri'
  );
})();
