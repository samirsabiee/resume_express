const {__} = require('../lang/handle')
exports.exception = (errors, field, objectParams = {}) => {
    let result = "Unknown Error"
    if (errors.length > 0) {
        switch (errors[0].code) {
            case "string.base": // if args was not string
                result = __('string', field);
                break
            case "any.required": //if arg not sent
                result = __('required', field);
                break
            case "number.base":
                result = __('numeric', field);
                break
            case "string.min":
                result = __('min.string', field, objectParams);
                break
            case "string.max":
                result = __('max.string', field, objectParams);
                break
            case "array.base":
                result = __('array', field);
                break
            case "string.empty": // if arg sent empty string
                result = __('required', field);
                break
            case "string.email": // if arg sent empty string
                result = __('email', field);
                break
            case "string.pattern.base": // if arg sent empty string
                result = __('not_regex', field);
                break
            case "string.length": // if arg sent empty string
                result = __('digits_between', field, objectParams);
                break
            default:
                result = `${errors[0].code} -- ${field}`
                break;
        }
    }
    return new Error(result)
}