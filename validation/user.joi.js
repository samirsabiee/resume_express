const joi = require('joi')
const {exception} = require('./errors')
const user = joi.object().keys({
    name: joi
        .string()
        .min(3)
        .required()
        .error(errors => exception(errors, "category", {min: 3}))
        .label('Name'),
    mobile: joi
        .string()
        .length(11)
        .required()
        .error(errors => exception(errors, "mobile"))
        .label('Mobile'),
    password: joi
        .string()
        .min(8)
        .required()
        .error(errors => exception(errors, "password", {min: 8}))
        .label('Password')
}).unknown(true)

module.exports = user