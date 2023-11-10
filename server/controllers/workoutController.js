'use strict';
const Workout = require('../models/workout');

// TODO create requests
module.exports = {
  getAllWorkouts: async (req, res) => {
    try {
      // TODO add logic
      const workouts = await Workout.find();
      res.send(workouts);
      res.sendStatus(200);
    } catch (error) {
      console.error('error', error);
      // Handle the error or send an error response to the client
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  postWorkout: async (req, res) => {
    try {
      const workout = await Workout.create(req.body);
      res.status(201);
      res.send(workout);
    } catch (error) {
      console.error('error', error);
      // Handle the error or send an error response to the client
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
