const controller = require('../controllers')
const authRouter = require('./authRouter')
const adminRouter = require('./adminRouter')
const notFoundController = require('../controllers/404Controller')
module.exports = (app) => {
    app.get('/', controller.index)
    app.get('/download/resume', controller.download_resume)
    app.post('/sendMail', controller.sendMail)
    app.use('/auth', authRouter)
    app.use('/admin', adminRouter)
    app.use('*', notFoundController)
}