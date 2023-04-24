const express = require('express'); // Import the Express.js module

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
