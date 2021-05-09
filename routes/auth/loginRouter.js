const authController = require("../../controllers/authController");
const {forwardAuthenticated} = require('../../config/authenticate')

module.exports = (router) => {
    router.route("/login")
        .get(forwardAuthenticated,authController.showLogin)
        .post(authController.login)

    router.route("/logout").get(authController.logout);
};
