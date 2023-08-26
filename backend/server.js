require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutsRoutes = require('./routes/workouts');

const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.suchhmq.mongodb.net/mern-workouts-app?retryWrites=true&w=majority`

// Create the Express app.
const app = express();

// Define the middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('path:', req.path);
  console.log('method:', req.method);
  next();
});

// Route.
app.use('/api/workouts', workoutsRoutes);

// Connect to the database
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to the database');
    // Define the port.
    app.listen(process.env.PORT, () => {
      console.log('Server listening on port', process.env.PORT);
    }); 
  })
  .catch(err => console.log(err));

  