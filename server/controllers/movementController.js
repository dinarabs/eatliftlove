'use strict';
const Movement = require('../models/movement');

module.exports = {
  getAllMovements: async (req, res) => {
    try {
      const movements = await Movement.find();
      res.status(200);
      res.send(movements);
    } catch (error) {
      console.error('error', error);
      // Handle the error and send a generic error response to the client
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getMovementByName: async (req, res) => {
    try {
      const movements = await Movement.find();
      const movement = movements.find((movement) => movement.name.toLowerCase().replace(/\s+/g, '') === req.params.name);
      res.status(200);
      res.send(movement);
    } catch (error) {
      console.error(`Error in getMovementByName: ${error.message}`);
      // Handle the error and send a generic error response to the client
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  postMovement: async (req, res) => {
    try {
      const movement = await Movement.create(req.body);
      res.status(201);
      res.send(movement);
    } catch (error) {
      console.error(`Error in getMovementByName: ${error.message}`);
      // Handle the error and send a generic error response to the client
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
