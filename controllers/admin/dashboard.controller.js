const articleModel = require('../../models/article.model')

module.exports.dashboard = async (req, res) => {
    try {
        let data = {}
        data.articleCounts = await articleModel.counts()
        res.render('admin/dashboard', {layout: 'index', data})
    } catch (e) {
        res.status(404).send({message: e.message})
    }
}

