require('dotenv').config();
const express = require('express'); // Import the Express.js module
const mysql = require('mysql');


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

const app = express(); // Create an Express.js app
const router = express.Router(); // Create an instance of the router

router.get('/users', (req, res) => {
    // Define a route handler for GET /users
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
    res.json(users); // Return a JSON response
});

router.get('/users/:id', (req, res) => {
    
    // Get the value of the "id" parameter from the URL
    const user_id = req.params.id;
    // Return a response with the user ID
    res.send(`User ID: ${user_id}`);

});

app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello, World!'); // Define a route handler
});

const port = 3000; // Define the port number for your server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Start the server
});
