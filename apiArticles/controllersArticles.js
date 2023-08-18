module.exports = {

    getAllArticles : (req, res) => {
        res.status(200).json({
            message: 'OK'
        });
    },

    getArticleID : (req, res) => {
        const articleID = req.params.articleID
        res.status(200).json({
            message: `'get article' ${articleID}`
        });
    },

    creatArticle :  (req, res) => {
        res.status(200).json({
            message: req.body.message
        });
    },

    editArticleID : (req, res) => {
        res.status(200).json({
            message: 'OK articles'
        });
    }
}