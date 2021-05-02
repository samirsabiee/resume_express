const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.route('/login')
    .get(authController.showLogin)
    .post(authController.login)

module.exports = router