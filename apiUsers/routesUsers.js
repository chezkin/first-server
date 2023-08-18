const express = require('express');
const router = express.Router();

const { 
    sighnup,
    login,
 } = require('./controllersUsers');


router.post('/sighnup', sighnup);
router.post('/login', login);


module.exports = router;