const express = require('express')
const router = express.Router()
require('./admin/blogRouter')(router)
require('./admin/commentRouter')(router)
require('./admin/articleRouter')(router)
require('./admin/categoryRouter')(router)
module.exports = router