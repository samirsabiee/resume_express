const joi = require('joi')
const {exception} = require('./errors')
const email = joi.object().keys({
    name: joi
        .string()
        .min(3)
        .required()
        .error(errors => exception(errors, "category"))
        .label('CategoryName')
}).unknown(true)

module.exports = email