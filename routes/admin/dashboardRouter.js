const adminController = require('../../controllers/admin')
module.exports = (router) => {
    router.route('/dashboard').get(adminController.dashboard)
}