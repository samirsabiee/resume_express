const multer = require('multer')
const path = require('path')
const imageValidation = require('../validation/image')

class Upload {
    constructor(directory, fieldName) {
        this.directory = directory
        this.fieldName = fieldName
    }

    storage() {
        return multer.diskStorage({
            destination: `./uploads/${this.directory}`,
            filename: function (req, file, cb) {
                cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
            }
        })
    }

    upload() {
        return multer(this.multerImageOption(this.directory)).array(this.fieldName)
    }

    multerImageOption() {
        return {
            storage: this.storage(this.directory),
            limits: {fileSize: process.env.MAX_IMAGE_FILE_SIZE},
            fileFilter: async function (req, file, cb) {
                try {
                    await imageValidation.validateAsync(file)
                    cb(null, true)
                } catch (e) {
                    cb(e.details[0].message)
                }
            }
        }
    }

    uploadImages() {
        return this.upload()
    }
}

module.exports = Upload