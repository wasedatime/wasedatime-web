const mongoose = require('mongoose');

const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const buildingSchema = new Schema({
  _id: String,
  name: String,
  classrooms: [
    {
      _id: String,
      name: String
    }
  ]
});

module.exports = mongoose.model(
  'Building',
  buildingSchema,
  'spr_first_half_2018_buildings_sci_eng'
);
