const adminController = require('../../controllers/admin')
module.exports = (router) => {
    router.route('/comments').get(adminController.comments)
}