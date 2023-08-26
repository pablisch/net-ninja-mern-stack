const express = require('express');
const { 
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
} = require('../controllers/workoutController');

// Create the Express router
const router = express.Router();

// GET all workouts
router.get('/', getAllWorkouts);

// GET a single workout
router.get('/:id', getSingleWorkout);

// POST a new workout
router.post('/', createWorkout);

// PUT a single workout
router.put('/:id', updateWorkout);

// DELETE a single workout
router.delete('/:id', deleteWorkout);

// Export the router
module.exports = router;