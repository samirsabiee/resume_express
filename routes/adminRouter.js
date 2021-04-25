const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')
router.get('/dashboard', adminController.dashboard)
router.get('/blog', adminController.blog)
router.get('/comments', adminController.comments)
module.exports = router