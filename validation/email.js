const joi = require('joi')
const {exception} = require('./errors')
const email = joi.object().keys({
    name: joi
        .string()
        .min(3)
        .required()
        .error(errors => exception(errors, "name"))
        .label('Name'),
    email: joi
        .string()
        .email()
        .required()
        .error(errors => exception(errors, "email"))
        .label('Email'),
    subject: joi
        .string()
        .required()
        .error(errors => exception(errors, "subject"))
        .label('Subject'),
    message: joi
        .string()
        .max(300)
        .required()
        .error(errors => exception(errors, "message"))
        .label('Message')
})

module.exports = email