const adminController = require('../../controllers/admin')
module.exports = (router) => {
    router.route('/category')
        .get(adminController.showCategory)
        .post(adminController.saveCategory)
        .put(adminController.editCategory)
        .delete(adminController.deleteCategory)
}