'use strict';

const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/eatliftlove';

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`📚 Database is successfully connected @ ${DB_URI}!`);
  } catch (error) {
    console.error('🐞Database connection error:', error);
  }
}

connectToDatabase();

module.exports = mongoose;
