const express = require('express');
const router = express.Router();

const { 
    getAllCategories,
    getCategoryID,
    creatCategory,
    editCategoryID,
 } = require('./controllersCategories');



router.get('/', getAllCategories);

router.get('/:categoryID', getCategoryID);

router.post('/add-Category', creatCategory);

router.put('/:editCategoryID', editCategoryID);

module.exports = router;