const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')
router.get('/dashboard', adminController.dashboard)
router.get('/blog', adminController.blog)
router.get('/comments', adminController.comments)
router.get('/addArticle', adminController.addArticle)
router.post('/saveArticle', adminController.saveArticle)
module.exports = router