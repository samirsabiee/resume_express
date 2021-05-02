const authController = require('../../controllers/authController')
module.exports = (router) => {
    router.route('/login')
        .get(authController.showLogin)
        .post(authController.login)
}