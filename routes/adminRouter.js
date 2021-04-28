const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')
router.route('/dashboard').get(adminController.dashboard)
router.route('/blog').get(adminController.blog)
router.get('/comments', adminController.comments)
router.get('/addArticle', adminController.addArticle)
router.post('/saveArticle', adminController.saveArticle)
module.exports = router