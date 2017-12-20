const mongoose = require('mongoose');

const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const buildingSchema = new Schema({
  classrooms: [
    {
      id: ObjectId,
      name: String
    }
  ]
});

module.exports = mongoose.model(
  'Building',
  buildingSchema,
  'buildings_fund_eng_eng'
);
