module.exports.showLogin = (req, res) => {
    res.status(200).json({message: 'Login Form'})
}
module.exports.login = (req, res) => {
    res.status(200).json({message: 'Login Post'})
}