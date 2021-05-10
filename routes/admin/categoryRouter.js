const categoryController = require('../../controllers/admin/category.controller')
module.exports = (router) => {
    router.route('/category')
        .get(categoryController.showCategory)
        .post(categoryController.saveCategory)
        .put(categoryController.editCategory)
        .delete(categoryController.deleteCategory)
}