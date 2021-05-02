const articleController = require('../../controllers/admin/articleController')
module.exports = (router) => {
    router.route('/article')
        .get(articleController.showArticleForm)
        .post(articleController.saveArticle)
        .put(articleController.editArticle)
    router.get('/editArticle:id', articleController.showEditArticleForm)
    router.get('/singleArticle', articleController.showSingleArticle)
}