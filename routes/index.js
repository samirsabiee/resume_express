const controller = require('../controllers')
module.exports = (app) => {
    app.get('/', controller.index)
    app.get('/download/resume', controller.download_resume)
    app.post('/sendMail', controller.sendMail)
}