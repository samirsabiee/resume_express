const articleModel = require('../../models/article')

module.exports.blog = async (req, res) => {
    try {
        const articles = await articleModel.paginateArticle(1, 10)
        res.render('admin/dashboard', {layout: 'blog', data: articles})
    } catch (e) {
        res.status(404).send({message: e.message})
    }
}