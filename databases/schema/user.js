const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    name: {type: String, trim: true},
    mobile: {type: String, required: true, trim: true, unique: true},
    password: {type: String, required: true, trim: true},
})

userSchema.pre("save", function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash
        });
        next();
    });
})

module.exports = mongoose.model("User", userSchema, 'user')
