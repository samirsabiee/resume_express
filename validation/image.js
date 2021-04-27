const Joi = require('joi')
const file = Joi.object().keys({
    fieldname: Joi.string().required().label('FieldName'),
    originalname: Joi.string().required().label('OriginalName'),
    encoding: Joi.string().required().label('Encoding'),
    mimetype: Joi.string().valid('image/jpeg', 'image/png', 'image/svg+xml').required().label('MimeType')
})
module.exports = file