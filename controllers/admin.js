const upload = require('../services/upload')
module.exports.dashboard = (req, res) => {
    res.render('admin/dashboard', {layout: 'index'})
}
module.exports.blog = (req, res) => {
    res.render('admin/dashboard', {layout: 'blog'})
}
module.exports.comments = (req, res) => {
    res.render('admin/dashboard', {layout: 'comments'})
}
module.exports.addArticle = (req, res) => {
    res.render('admin/dashboard', {layout: 'addArticle'})
}
module.exports.saveArticle = async (req, res) => {
    try {
        upload.uploadImages(req, res, 'articles', 'files')
    } catch (e) {
        console.log(e)
        res.status(400).send({message: e.message})
    }
}