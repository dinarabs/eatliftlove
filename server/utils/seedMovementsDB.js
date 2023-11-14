const mongoose = require('mongoose');
require('../db');
const fs = require('fs');
const Movement = require('../models/movement');

fs.readFile('./sampleMovements.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  const jsonData = JSON.parse(data);

  Movement.insertMany(jsonData)
    .then(() => {
      console.log('Movements seeded successfully✨');
      mongoose.connection.close();
    })
    .catch((error) => {
      console.error('Error seeding Movements:', error);
      mongoose.connection.close();
    });
});