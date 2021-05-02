module.exports.comments = (req, res) => {
    try {
        res.render('admin/dashboard', {layout: 'comments', data: ''})
    } catch (e) {
        res.status(404).send({message: e.message})
    }
}