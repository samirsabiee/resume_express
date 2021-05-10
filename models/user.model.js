const userSchema = require('../databases/schema/user.schema')
const userValidation = require('../validation/user.validate')
const mobileValidation = require('../validation/mobile.validate')

class UserModel {
    async create(user) {
        try {
            await userValidation.validateAsync(user)
            return await userSchema.create(user)
        } catch (e) {
            throw e
        }
    }

    async findOne(mobile) {
        try {
            await mobileValidation.validateAsync({mobile})
            return await userSchema.findOne({mobile})
        } catch (e) {
            throw e
        }
    }

    async all() {
        try {
            return await userSchema.find()
        } catch (e) {
            throw e
        }
    }

    async updateOne(user) {
        try {
            await userValidation.validateAsync({name: user.name})
            return await userSchema.findByIdAndUpdate(user.id, {name: user.name}, {new: true})
        } catch (e) {
            throw e
        }
    }

    async findById(id) {
        try {
            return await userSchema.findById(id)
        } catch (e) {
            throw e
        }
    }

    async deleteById(id) {
        try {
            return await userSchema.findByIdAndRemove(id)
        } catch (e) {
            throw e
        }
    }
}

module.exports = new UserModel()
