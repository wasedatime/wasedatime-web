const mongoose = require('mongoose');
const { Schema } = mongoose;

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
