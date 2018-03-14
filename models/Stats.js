const mongoose = require('mongoose');

const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const statsSchema = new Schema({
  _id: ObjectId,
  finish_time: String
});

module.exports = mongoose.model(
  'Stats',
  statsSchema,
  'stats'
);
