const transporter = require('../config/nodemailer')

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

    makeHtml(name, subject, senderMail, message) {
        return `
                <div class="jumbotron">
                <h1>${subject}</h1>
                <h3>${name}</h3>
                <h4>${senderMail}</h4>
                <p>${message}</p>
                </div>
            `
    }
}

module.exports = new MailServices()