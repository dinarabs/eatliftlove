'use strict';
const mongoose = require('../db.js');

// TODO update
const movementSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;
