const adminController = require('../../controllers/admin')
module.exports = (router) => {
    router.route('/article')
        .get(adminController.showArticleForm)
        .post(adminController.saveArticle)
        .put(adminController.editArticle)
    router.get('/editArticle:id', adminController.showEditArticleForm)
    router.get('/singleArticle', adminController.showSingleArticle)
}