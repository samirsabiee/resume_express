module.exports.dashboard = (req, res) => {
    res.render('admin/dashboard', {layout: 'index'})
}
module.exports.blog = (req, res) => {
    res.render('admin/dashboard', {layout: 'blog'})
}
module.exports.comments = (req, res) => {
    res.render('admin/dashboard', {layout: 'comments'})
}