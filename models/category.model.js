const categorySchema = require('../databases/schema/category.schema')
const categoryValidation = require('../validation/category')

class CategoryModel {
    async create(category) {
        try {
            await categoryValidation.validateAsync(category)
            return await categorySchema.create(category)
        } catch (e) {

            throw e
        }
    }

    async findById(id) {
        try {
            return await categorySchema.findById(id)
        } catch (e) {
            throw e
        }
    }

    async all() {
        try {
            return await categorySchema.find()
        } catch (e) {
            throw e
        }
    }

    async updateOne(category) {
        try {
            await categoryValidation.validateAsync({name: category.name})
            return await categorySchema.findByIdAndUpdate(category.id, {name: category.name}, {new: true})
        } catch (e) {
            throw e
        }
    }

    async deleteById(id) {
        try {
            return await categorySchema.findByIdAndRemove(id)
        } catch (e) {
            throw e
        }
    }
}

module.exports = new CategoryModel()