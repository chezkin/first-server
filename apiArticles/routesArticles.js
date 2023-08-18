const express = require('express');
const router = express.Router();

const { 
    getAllArticles,
    getArticleID,
    creatArticle,
    editArticleID,
 } = require('./controllersArticles');



router.get('/', getAllArticles);

router.get('/:articleID', getArticleID);

router.post('/add-article', creatArticle);

router.put('/:editArticleID', editArticleID);

module.exports = router;