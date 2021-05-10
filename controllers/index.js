const path = require('path')
const fileSystemService = require('../services/filesystem.service')
const mailServices = require('../services/mailServices.service')
const emailValidation = require('../validation/email')
const messages = require('../services/messages.service')
module.exports.index = (req, res) => {
    res.render('index')
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
    await emailValidation.validateAsync(body)
    await mailServices.sendMailToMe(body.name, body.subject, body.email, body.message)
    res.status(200).send({message: messages.successSendEmail})
}