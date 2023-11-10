'use strict';

const express = require('express');
const router = express.Router();

// TODO import the rest from controllers folder
const movementController = require('./controllers/movementController');
const workoutController = require('./controllers/workoutController');

// TODO update routers
router.get('/movements', movementController.getAllMovements);
// TODO add post router
// router.post('/movement', movementController.postMovement);
// router.get('/movements/:id', movementController.getMovementById);
router.get('/workouts', workoutController.getAllWorkouts);
router.post('/workout', workoutController.postWorkout);

module.exports = router;
