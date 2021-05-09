const joi = require('joi')
const {exception} = require('./errors')
const mobile = joi.object().keys({
    mobile: joi
        .string()
        .length(11)
        .required()
        .error(errors => exception(errors, "mobile", {min: 11, max: 11}))
        .label('Mobile'),
}).unknown(true)

module.exports = mobile