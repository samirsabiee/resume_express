const CategoryFactory = require('../factory/category.factory')

class CategorySeeder extends CategoryFactory {
    constructor(categoryCount) {
        super(categoryCount)
    }

    async seedCategory() {
        return this.createCategory()
    }
}

module.exports = CategorySeeder