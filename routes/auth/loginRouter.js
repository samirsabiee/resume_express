const authController = require("../../controllers/authController");
const passport = require("passport");

module.exports = (router) => {
  router.get("/login", authController.showLogin);

  router.post("/login", authController.login);

  router.route("/logout").get(authController.logout);
};
