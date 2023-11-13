const mongoose = require('mongoose');
require('../db');
const fs = require('fs');
const Workout = require('../models/workout');

fs.readFile('./sampleWods.json', 'utf8', (err, data) => {
  console.log(data);
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  const jsonData = JSON.parse(data);

  Workout.insertMany(jsonData)
    .then(() => {
      console.log('Workouts seeded successfully✨');
      mongoose.connection.close();
    })
    .catch((error) => {
      console.error('Error seeding Workouts:', error);
      mongoose.connection.close();
    });
});