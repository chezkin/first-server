// Express object import
const express = require('express');
// Creating an express object named app
const app = express();
// Importing a MORGAN type object to manage writing to the console
const morgan = require('morgan');


// Import into variables the router files
const usersRoutes = require('./apiUsers/routesUsers');
const articlesRoutes = require('./apiArticles/routesArticles');
const categoriesRoutes = require('./apiCategories/routesCategories');

// Creating a middleware that will write the status and time to the console in every request
app.use(morgan("dev"));

// Creating middleware // The function handles the CORS settings and the response to OPTIONS requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type,Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET, PATCH");
        return res.status(200).json({})
    }
    next();
});

// Create Middleware // The function converts the request body to JSON format
app.use(express.json());

// Create Middleware // The function handles a different format of sending a request
app.use(express.urlencoded({
    extended: false
}));



// Routes
// Creating middleware for each and every one of the routers
app.use('/articles', articlesRoutes);
app.use('/categories', categoriesRoutes);
app.use('/users', usersRoutes);


// Creating a middleware to handle the case and the request does not match any path
// page not found 404
app.use((req, res, next) => {
    const error = new Error('page not found');
    error.status = 404;
    next(error);
});

// Creating middleware to handle any error case
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            error : error.message
        }
    });
});

// Export the APP file
module.exports = app;