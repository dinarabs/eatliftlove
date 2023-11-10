'use strict';
const Movement = require('../models/movement');

// TODO create requests
module.exports = {
  getAllMovements: async (req, res) => {
    try {
      // TODO add logic
      const movements = await Movement.find();
      res.send(movements);
      res.sendStatus(200);
    } catch (error) {
      console.error('error', error);
      // Handle the error or send an error response to the client
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getMovementById: async (req, res) => {
    // try {
    //   // TODO add logic
    // } catch (error) {
    //   console.error(`Error in getMovementById: ${error.message}`);
    //   // Handle the error or send an error response to the client
    //   res.status(500).json({ error: 'Internal server error' });
    // }
  },
};