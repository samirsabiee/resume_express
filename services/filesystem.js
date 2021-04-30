const fs = require('fs')

class Filesystem {
    isExists(path) {
        return fs.existsSync(path)
    }

    removeFile(rootDirectory, path) {
        try {
            fs.unlink(`${rootDirectory}/${path}`)
            return true
        } catch (e) {
            throw e
        }
    }
}

module.exports = new Filesystem()