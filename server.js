// with god help

// Create an object to handle HTTP requests
const http = require('http');

// Import the request management file to the server
const app = require('./app');

// Setting the port where the server will be established
const port = 3000;

// Setting up a server
const server = http.createServer(app);

// Setting the port where the server will be established
server.listen(port);