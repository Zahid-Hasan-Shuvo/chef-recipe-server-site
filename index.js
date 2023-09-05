// Import the necessary modules
const express = require('express');

// Create an instance of the Express application
const app = express();
const port = 3000; // Define the port number

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
