const messages = require('../../services/messages')
const categoryModel = require('../../models/category')

module.exports.showCategory = async (req, res) => {
    try {
        const categories = await categoryModel.all()
        res.render('admin/dashboard', {layout: 'categoryList', data: categories})
    } catch (e) {
        res.status(400).send({message: e.message})
    }
}
module.exports.saveCategory = async (req, res) => {
    try {
        const category = await categoryModel.create(req.body)
        res.status(200).send({message: messages.successSaveCategory, category})
    } catch (e) {
        res.status(400).send({message: e.message})
    }
}
module.exports.editCategory = async (req, res) => {
    try {
        const newCategory = await categoryModel.updateOne(req.body)
        res.status(200).send({message: messages.successEditCategory, newCategory})
    } catch (e) {
        res.status(400).send({message: e.message})
    }
}
module.exports.deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await categoryModel.deleteById(req.body.id)
        res.status(200).send({message: messages.successDeleteCategory, category: deletedCategory})
    } catch (e) {
        res.status(400).send({message: e.message})
    }
}