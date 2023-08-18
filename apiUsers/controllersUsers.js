module.exports = {

    login : (req, res) => {
        res.status(200).json({
            message: 'login'
        });
    },
    sighnup : (req, res) => {
        res.status(200).json({
            message: 'sighnup'
        });
    },
}