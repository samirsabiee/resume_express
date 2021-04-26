const articleModel = require('../databases/models/article')
const articleValidator = require('../validation/article')

class Article {
    async create(article) {
        try {
            await articleValidator.validateAsync(article)
            return await articleModel.create(article)
        } catch (e) {
            console.log(e)
        }
    }

    async updateById(id, article) {
        try {
            await articleValidator.validateAsync(article)
            return await articleModel.findByIdAndUpdate(id, article)
        } catch (e) {
            console.log(e)
        }
    }

    async deleteById(id) {
        return await articleModel.deleteOne(id)
    }
}

module.exports = new Article()