const transporter = require('../config/nodemailer')
const ejs = require('ejs')
const path = require('path')

class MailServices {
    async sendMailToMe(name, subject, senderMail, message) {
        return await transporter.sendMail({
            from: senderMail,
            to: process.env.MY_MAIL,
            subject: subject,
            text: message,
            html: this.makeHtml(name, subject, senderMail, message)
        })
    }

    async makeHtml(name, subject, senderMail, message) {
        return await ejs.renderFile(path.join(__dirname, '../views/contact_email.ejs'), {
            name,
            subject,
            senderMail,
            message
        });
    }
}

module.exports = new MailServices()