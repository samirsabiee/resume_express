const express = require('express')
const router = express.Router()
require('./admin/dashboard.router')(router)
require('./admin/blog.router')(router)
require('./admin/comment.router')(router)
require('./admin/article.router')(router)
require('./admin/category.router')(router)
require('./admin/sample.router')(router)
module.exports = router