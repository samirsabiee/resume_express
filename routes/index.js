const controller = require('../controllers')
const adminRouter = require('./adminRouter')
const messages = require('../services/messages')
module.exports = (app) => {
    app.get('/', controller.index)
    app.get('/download/resume', controller.download_resume)
    app.post('/sendMail', controller.sendMail)
    app.use('/admin', adminRouter)
    app.get('/login', controller.login)
    app.post('/login', controller.login)
    app.use('*', (re, res) => {
        res.status(404).json({error: messages.routeNotFound})
    })
}