const UserFactory = require('../factory/user.factory')

class UserSeeder extends UserFactory {
    constructor(userCount) {
        super(userCount)
    }

    async seedUser() {
        return this.createUsers()
    }
}

module.exports = UserSeeder