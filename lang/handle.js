const {validations, attributes} = require("./errors.json");

exports.__ = (validation, field = null, params = {}) => {
    validation = validation.split(".");
    let msg = validations[validation[0]] || "";
    if (validation.length > 1) msg = msg[validation[1] || ""];

    const translate = attributes[field] || field;
    let result = msg.replace(":attribute", translate);

    for (const key in params) {
        const translate = attributes[params[key]] || params[key];
        result = result.replace(`:${key}`, translate);
    }

    return result;
};

// console.log(
//     "-------------------------------\n",
//     validationMessage("max.numeric", "age", {
//         max: 10,
//     }),
//     "\n-------------------------------\n",
//     validationMessage("between.numeric", "age", {
//         min: 18,
//         max: 45,
//     }),
//     "\n-------------------------------\n",
//     validationMessage("required_unless", "email", {
//         other: "mobile",
//         values: "username",
//     }),
//     "\n-------------------------------\n",
//     validationMessage("regex", "email"),
//     "\n-------------------------------\n",
//     validationMessage("default_message")
// );