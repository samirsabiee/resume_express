const articleSchema = require('../databases/schema/article')
const articleValidator = require('../validation/article')

class Article {
    async create(article) {
        try {
            await articleValidator.validateAsync(article)
            return await articleSchema.create(article)
        } catch (e) {
            console.log(e)
        }
    }

    async updateById(id, article) {
        try {
            await articleValidator.validateAsync(article)
            return await articleSchema.findByIdAndUpdate(id, article)
        } catch (e) {
            console.log(e)
        }
    }

    async deleteById(id) {
        return await articleSchema.deleteOne(id)
    }

    async all() {
        return await articleSchema.find()
    }

    async paginateArticle(page, limit) {
        return await articleSchema.paginate({}, {page, limit})
    }
}

module.exports = new Article()