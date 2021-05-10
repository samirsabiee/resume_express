const controller = require('../controllers')
const authRouter = require('./auth.router')
const adminRouter = require('./admin.router')
const notFoundController = require('../controllers/404.controller')
const {ensureAuthenticated} = require('../middlewares/authenticate.middleware')
module.exports = (app) => {
    app.get('/', controller.index)
    app.get('/download/resume', controller.download_resume)
    app.post('/sendMail', controller.sendMail)
    app.use('/auth', authRouter)
    app.use('/admin', ensureAuthenticated)
    app.use('/admin', adminRouter)
    app.use('*', notFoundController)
}