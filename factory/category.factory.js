const categorySchema = require('../databases/schema/category.schema')
const faker = require('faker')
faker.locale = "fa"

class CategoryFactory {
    constructor(count) {
        this.count = count
    }

    async createCategory() {
        let categories = []
        for (let i = 0; i < this.count; i++) {
            const category = {
                name: faker.music.genre() + i
            }
            categories.push(category)
            console.log(`${i} category pushed`)
        }
        return categorySchema.insertMany(categories)
    }
}

module.exports = CategoryFactory