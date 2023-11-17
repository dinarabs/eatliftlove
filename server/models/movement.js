'use strict';
const mongoose = require('../db.js');

const movementSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  category: {
    type: String,
  },
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;
