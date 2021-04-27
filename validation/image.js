const Joi = require('joi')
const {exception} = require('./errors')
const file = Joi.object().keys({
    fieldname: Joi
        .string()
        .required()
        .error(errors => exception(errors, "fieldname"))
        .label('FieldName'),
    originalname: Joi
        .string()
        .required()
        .error(errors => exception(errors, "originalname"))
        .label('OriginalName'),
    encoding: Joi
        .string()
        .required()
        .error(errors => exception(errors, "encoding"))
        .label('Encoding'),
    mimetype: Joi
        .string()
        .valid('image/jpeg', 'image/png', 'image/svg+xml')
        .required()
        .error(errors => exception(errors, "mimetype"))
        .label('MimeType')
})
module.exports = file