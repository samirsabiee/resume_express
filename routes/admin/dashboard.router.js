const dashboardController = require('../../controllers/admin/dashboard.controller')

module.exports = (router) => {
    router.get('/dashboard', dashboardController.dashboard)
}
