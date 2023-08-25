require('dotenv').config();

const express = require('express');
const workoutsRoutes = require('./routes/workouts');

// Create the Express app.
const app = express();

// Define the middleware.
app.use((req, res, next) => {
  console.log('path:', req.path);
  console.log('method:', req.method);
  next();
});

// Route.
app.use('/api/workouts', workoutsRoutes);

// Define the port.
app.listen(process.env.PORT, () => {
  console.log('Server listening on port', process.env.PORT);
}); 
