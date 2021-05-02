const categoryController = require('../../controllers/admin/categoryController')
module.exports = (router) => {
    router.route('/category')
        .get(categoryController.showCategory)
        .post(categoryController.saveCategory)
        .put(categoryController.editCategory)
        .delete(categoryController.deleteCategory)
}