const Upload = require('../services/upload')
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
module.exports.saveArticle = async (req, res) => {
    try {
        new Upload('articles', 'files').uploadImages()(req, res, (err) => {
            if (err) {
                res.status(400).send(err)
            } else {
                console.log(req.files)
                res.status(200).send({message: messages.successSaveArticle})
            }
        })
    } catch (e) {
        console.log(e)
        res.status(400).send({message: e.message})
    }
}