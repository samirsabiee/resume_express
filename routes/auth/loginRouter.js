const authController = require("../../controllers/authController");
const passport = require("passport");

module.exports = (router) => {
    router.route("/login")
        .get(authController.showLogin)
        .post(authController.login)

    router.route("/logout").get(authController.logout);
};
