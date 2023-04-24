require('dotenv').config();

const express = require('express'); // Import the Express.js module
const mysql = require('mysql');

// import knex to app
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig);

const bodyParser = require('body-parser');
const userRouter = require('./routes/users');

// create the database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10 // set connection limit
});

// test the database connection
pool.getConnection((err, connection) => {
  if (err) throw err
  console.log('Connected to MySQL database...')
  connection.release()
});

// pool.query('SELECT * FROM users', (err, results) => {
//   if (err) throw err
//   console.log(results);
// });

knex.select('*').from('users')
  .then(rows => {
    console.log(rows);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    knex.destroy();
  });

const app = express(); // Create an Express.js app
const router = express.Router(); // Create an instance of the router

app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello, World!'); // Define a route handler
});

const port = 3000; // Define the port number for your server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Start the server
});
