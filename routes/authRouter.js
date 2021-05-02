const express = require('express')
const router = express.Router()
require('./auth/loginRouter')(router)
module.exports = router