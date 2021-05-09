const UserFactory = require('../factory/user.factory')

class UserSeeder {
    constructor(userCount) {
        this.userCount = userCount;
    }

    async seedUser() {
        return await new UserFactory(this.userCount).createUsers()
    }
}

module.exports = UserSeeder