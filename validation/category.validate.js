const joi = require('joi')
const {exception} = require('./errors')
const category = joi.object().keys({
    name: joi
        .string()
        .min(3)
        .required()
        .error(errors => exception(errors, "category", {min: 3}))
        .label('CategoryName')
}).unknown(true)

module.exports = category