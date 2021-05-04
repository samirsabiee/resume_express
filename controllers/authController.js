module.exports.showLogin = (req, res) => {
    res.render('login')
}
module.exports.login = (req, res) => {
    res.status(200).json(req.body)
}
