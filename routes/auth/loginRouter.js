const authController = require('../../controllers/auth')
module.exports = (router) => {
    router.route('/login')
        .get(authController.showLogin)
        .post(authController.login)
}