'use strict';
const mongoose = require('../db.js');

// TODO update
const workoutSchema = mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  // },
  // videoUrl: {
  //   type: String,
  // },
  // imageUrl: {
  //   type: String,
  // },
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
