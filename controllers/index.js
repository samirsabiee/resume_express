const path = require('path')
const fileSystemService = require('../services/filesystem')
const mailServices = require('../services/mailServices')
const emailvalidation = require('../validation/email')
module.exports.index = (req, res) => {
    console.log('------------------> ', req.session.action)
    res.render('index', {data: req.session.action})
}
module.exports.download_resume = (req, res) => {
    const resumeFile = path.join(__dirname, '../public/assets/resume_file/samir_sabiee.pdf')
    if (fileSystemService.isExists(resumeFile)) {
        res.download(resumeFile)
    } else {
        res.status(404).send({message: 'File Not Found'})
    }
}
module.exports.sendMail = async (req, res) => {
    const body = req.body
    await emailvalidation.validateAsync(body)
    const info = await mailServices.sendMailToMe(body.name, body.subject, body.email, body.message)
    console.log(info)
    req.session.action = {
        message: 'email successfully sent',
        list: []
    }
    res.render('index', {data: req.session.action})
}