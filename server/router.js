'use strict';

const express = require('express');
const router = express.Router();

// TODO import the rest from controllers folder
const movementController = require('./controllers/movementController');

// TODO update routers
router.get('/movements', movementController.getAllMovements);
router.get('/movements/:id', movementController.getMovementById);
// router.post('/movements', postMovement);

module.exports = router;
