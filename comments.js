// Create web server
// Run this file with `node comment.js`
// Access the web server at `http://localhost:3000`
// The web server will print out "Hello, World!" when accessed

// Import the express module
var express = require('express');

// Create an express application
var app = express();

// Create a GET route for the root URL
app.get('/', function(req, res) {
  res.send('Hello, World!');
});

// Start the server on port 3000
app.listen(3000, function() {
  console.log('Server started on http://localhost:3000');
});