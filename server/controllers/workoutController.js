'use strict';
const Workout = require('../models/workout');

module.exports = {
  getAllWorkouts: async (req, res) => {
    try {
      const workouts = await Workout.find();
      res.status(200);
      res.send(workouts);
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

  //TODO add getWorkoutById
};
