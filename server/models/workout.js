'use strict';
const mongoose = require('../db.js');

// TODO update
const workoutSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  levels: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
