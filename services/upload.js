const multer = require('multer')
const path = require('path')
const messages = require('../services/messages')
const imageValidation = require('../validation/image')

class Upload {
    storage(directory) {
        return multer.diskStorage({
            destination: `./uploads/${directory}`,
            filename: function (req, file, cb) {
                cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
            }
        })
    }

    upload(directory, fieldName) {
        return multer(this.multerImageOption(directory)).array(fieldName)
    }

    multerImageOption(directory) {
        return {
            storage: this.storage(directory),
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

    uploadImages(req, res, directory, fieldName) {
        return this.upload(directory, fieldName)(req, res, (err) => {
            if (err) {
                res.status(400).send(err)
            } else {
                //console.log(req.files)
                res.status(200).send({message: messages.successSaveArticle})
            }
        })
    }
}

module.exports = new Upload()