// Define our route handlers here
// Separation of concerns

// Import external stuff (libraries)
// Import express library
const express = require('express');
const cors = require('cors');

// Import OUR stuff (our files, our components)
// const studentsData = require('./studentsData.json');

// Init express application
const studentsController = require('./controllers/studentsControllers');
const app = express();

// Set up middleware
// Functions that will work with req, res before
// the final route handler function
app.use(cors());

app.use('/students', studentsController);
// Define our routes

// Healthcheck route
app.get('/', (request, response) => {
  response.status(200).json({ data: 'Service is running' });
});





module.exports = app;
