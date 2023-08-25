const express = require('express');

// Create the Express router
const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
  res.json({mssg: 'Route for all the workouts'});
});

// GET a single workout
router.get('/:id', (req, res) => {
  res.json({mssg: 'Route for a single workout'});
});

// POST a new workout
router.post('/', (req, res) => {
  res.json({mssg: 'Route for creating a new workout'});
});

// PUT a single workout
router.put('/:id', (req, res) => {
  res.json({mssg: 'Route for updating a single workout'});
});

// DELETE a single workout
router.delete('/:id', (req, res) => {
  res.json({mssg: 'Route for deleting a single workout'});
});

// Export the router
module.exports = router;