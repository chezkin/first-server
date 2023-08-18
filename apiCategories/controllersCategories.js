module.exports = {

    getAllCategories: (req, res) => {
        res.status(200).json({
            message: 'OK'
        });
    },

    getCategoryID: (req, res) => {
        const articleID = req.params.categoryID
        res.status(200).json({
            message: `'get Category' ${articleID}`
        });
    },

    creatCategory: (req, res) => {
        res.status(200).json({
            message: req.body.message
        });
    },

    editCategoryID: (req, res) => {
        const articleID = req.params.categoryID
        res.status(200).json({
            message: `'edit Category' ${articleID}`
        });
    }
}