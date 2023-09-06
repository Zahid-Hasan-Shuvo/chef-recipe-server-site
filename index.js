// Import the necessary modules
const express = require('express');

// Create an instance of the Express application
const app = express();
const cors =require("cors")
const port = 3000; // Define the port number

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

const categories=require('./data/categories.json')

app.use(cors())
//
app.get('/categories', (req, res) => {
    res.send(categories);
  });


  app.get('/categories/:id', (req, res) => {
    const id=req.params.id;
    const selectedRecepi= categories.find(n=>parseInt(n._id)===id)
    res.send(selectedRecepi)
  });

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
