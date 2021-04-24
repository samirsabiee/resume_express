const joi = require('joi')
const email = joi.object().keys({
    name: joi.string().min(5).required().label('Name'),
    email: joi.string().email().required().label('Email'),
    subject: joi.string().required().label('Subject'),
    message: joi.string().max(300).required().label('Message')
})

module.exports = email