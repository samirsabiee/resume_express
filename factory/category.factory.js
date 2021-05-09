const categorySchema = require('../databases/schema/category')
const faker = require('faker')
faker.locale = "fa"

class CategoryFactory {
    constructor(count) {
        this.count = count
    }

    async createCategory() {
        const result = await categorySchema.deleteMany({})
        console.log('delete category collection result', result)
        let categories = []
        for (let i = 0; i < this.count; i++) {
            const category = {
                name: faker.music.genre() + i
            }
            categories.push(category)
            console.log(`${i} category pushed`)
        }
        return await categorySchema.insertMany(categories)
    }
}

module.exports = CategoryFactory