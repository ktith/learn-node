require('dotenv').config();

const express = require('express'); // Import the Express.js module
const mysql = require('mysql');

// import knex to app
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig);
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');

// Register global varaible
global.knex = knex;

const app = express(); // Create an Express.js app
const router = express.Router(); // Create an instance of the router

app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello, My node js app!'); // Define a route handler
});

const port = 3000; // Define the port number for your server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Start the server
});
