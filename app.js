const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan("dev"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type,Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET, PATCH");
        return res.status(200).json({})
    }
    next();
});


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK'
    });
});


app.use((req, res, next) => {
    const error = new Error('page not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            error : error.message
        }
    });
});

module.exports = app;