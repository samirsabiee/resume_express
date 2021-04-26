const messages = require('../services/messages')
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
module.exports.saveArticle = (req, res) => {
    console.log(req.files)
    console.log(req.body)
    res.send({message: messages.successSaveArticle})
}