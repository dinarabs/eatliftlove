'use strict';

const express = require('express');
const router = express.Router();

const movementController = require('./controllers/movementController');
const workoutController = require('./controllers/workoutController');

router.get('/movements', movementController.getAllMovements);
router.post('/movement', movementController.postMovement);
router.get('/movement/:name', movementController.getMovementByName);
router.get('/workouts', workoutController.getAllWorkouts);
router.post('/workout', workoutController.postWorkout);

module.exports = router;
