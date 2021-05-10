const authController = require("../../controllers/auth.controller");
const {forwardAuthenticated} = require('../../middlewares/authenticate.middleware')

module.exports = (router) => {
    router.route("/login")
        .get(forwardAuthenticated, authController.showLogin)
        .post(authController.login)

    router.route("/logout").get(authController.logout);
};
