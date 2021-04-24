const fs = require('fs')

class Filesystem {
    isExists(path) {
        return fs.existsSync(path)
    }
}

module.exports = new Filesystem()