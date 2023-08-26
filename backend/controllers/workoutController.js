const Workout = require('../models/workoutModel');

// GET all workouts
const getAllWorkouts = async (req, res) => {

  // get all docs from db collection
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  // get a single doc from db collection
  try {
    const workout = await Workout.findById(id);
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({
      error: `No workout with id: ${id} was found in the database`,
    });
  }
};

// POST (create) a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add doc to db collection
  try {
    const workout = await Workout.create(req.body);
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

// PUT (update) an existing workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const dataToUpdate = req.body;

  // update a single doc from db collection
  try {
    const workout = await Workout.findByIdAndUpdate(
      id,
      dataToUpdate,
      { new: true } // specifies to return the updated doc
    );
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({
      error: `No workout with id: ${id} was found in the database`,
    });
  }
}

// DELETE an existing workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  // delete a single doc from db collection
  try {
    const workout = await Workout.findByIdAndDelete(id);
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({
      error: `No workout with id: ${id} was found in the database`,
    });
  }
}

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
};