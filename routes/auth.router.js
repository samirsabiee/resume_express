const express = require('express')
const router = express.Router()

require('./auth/login.router')(router)

module.exports = router
