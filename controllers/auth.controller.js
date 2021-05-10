const passport = require("passport");

module.exports.showLogin = (req, res) => {
  res.render("login");
};

module.exports.login = async (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/admin/dashboard",
    failureRedirect: "login",
    failureFlash: true,
  })(req, res, next);
};

// Logout
module.exports.logout = (req, res, next) => {
  req.logout();
  res.redirect("/auth/login");
};
