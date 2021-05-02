const adminController = require('../../controllers/admin')
module.exports = (router) => {
    router.route('/blog').get(adminController.blog)
}