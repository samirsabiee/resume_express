const categorySchema = require('../databases/schema/category')
const categoryValidation = require('../validation/category')

class Category {
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
}

module.exports = new Category()