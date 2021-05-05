const dashboardController = require('../../controllers/admin/dashboardController')
const {ensureAuthenticated} = require('../../config/authenticate')

module.exports = (router) => {
    router.get('/dashboard', ensureAuthenticated, dashboardController.dashboard)
}
