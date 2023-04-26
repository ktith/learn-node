require('dotenv').config();

const express = require('express'); // Import the Express.js module
const mysql = require('mysql');
const path = require('path');

// import knex to app
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig);

const bodyParser = require('body-parser');
const userRouter = require('./routes/users');

// Register global varaible
global.knex = knex;

const app = express(); // Create an Express.js app
const router = express.Router(); // Create an instance of the router

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/', router);

app.get('/', (req, res) => {
  res.render('index', { title: 'My Homepage' });
});

router.get('/people', (req, res) => {
  // Define a route handler for GET /users
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  res.json(users); // Return a JSON response
});

const port = 3000; // Define the port number for your server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Start the server
});
