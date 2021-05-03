const express = require('express')
const router = express.Router()
require('./admin/dashboardRouter')(router)
require('./admin/blogRouter')(router)
require('./admin/commentRouter')(router)
require('./admin/articleRouter')(router)
require('./admin/categoryRouter')(router)
require('./admin/sampleRouter')(router)
module.exports = router