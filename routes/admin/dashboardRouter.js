const dashboardController = require('../../controllers/admin/dashboardController')
module.exports = (router) => {
    router.route('/dashboard').get(dashboardController.dashboard)
}