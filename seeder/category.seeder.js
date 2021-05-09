const CategoryFactory = require('../factory/category.factory')

class CategorySeeder {
    constructor(categoryCount) {
        this.categoryCount = categoryCount;
    }

    async seedCategory() {
        return await new CategoryFactory(this.categoryCount).createCategory()
    }
}

module.exports = CategorySeeder