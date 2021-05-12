const sampleModel = require('../../models/sample.model')
const mediaModel = require('../../models/media.model')
const messages = require('../../services/messages.service')
const upload = require('../../services/upload.service')
module.exports.showAddSampleForm = async (req, res) => {
    try {
        res.render('admin/dashboard', {layout: 'addSample', data: ''})
    } catch (e) {
        res.render('404')
    }
}
module.exports.showEditSampleForm = async (req, res) => {
    try {
        const sample = await sampleModel.findById(req.params.id)
        res.render('admin/dashboard', {layout: 'editSample', data: sample})
    } catch (e) {
        res.render('404')
    }
}
module.exports.showSingleSample = async (req, res) => {
    try {
        const sample = await sampleModel.findById(req.query.id)
        res.render('admin/dashboard', {layout: 'singleSample', data: sample})
    } catch (e) {
        res.render('404')
    }
}
module.exports.saveSample = async (req, res) => {
    console.log('request received')
    new upload('samples', 'images', true).uploadImages()(req, res, async (err) => {
        if (err) {
            console.log(err)
            res.status(400).send({message: err})
        } else {
            try {
                await isFilesReceived(req.files)
                const files = await saveFiles(req.files)
                await createSample(req.body, getFilesId(files))
                res.status(200).send({message: messages.successSaveSample})
            } catch (e) {
                res.status(400).send({message: e.message})
            }
        }
    })
}
module.exports.editSample = async (req, res) => {
    new upload('samples', 'images', true).uploadImages()(req, res, async (err) => {
        if (err) {
            res.status(200).send({message: e.message})
        } else {
            try {
                await updateSample(req.body.req.files, res)
            } catch (e) {
                res.status(400).send({message: e.message})
            }
        }
    })
}
module.exports.deleteSample = async (req, res) => {
    try {
        await sampleModel.deleteById(req.body.id)
        res.status(200).send({message: messages.successDeleteSample})
    } catch (e) {
        res.status(400).send({message: e.message})
    }
}

async function saveFiles(files) {
    return await mediaModel.createMany(files)
}

function getFilesId(files) {
    let ids = []
    files.forEach(file => {
        ids.push(file.id)
    })
    return ids
}

async function createSample(sample, ids) {
    sample.media = ids
    return await sampleModel.create(sample)
}

async function updateSample(sample, files, res) {
    try {
        if (files) await updateFiles(files)
        sample.media = getFilesId(files)
        await sampleModel.updateById(sample)
        res.status(200).send({message: messages.successEditSample})
    } catch (e) {
        res.status(400).send({message: e.message})
    }
}

async function updateFiles(files) {
    try {
        for (const file of files) {
            await mediaModel.updateById(file.id, file)
        }
    } catch (e) {
        throw e
    }
}

function isFilesReceived(files) {
    return new Promise((resolve, reject) => {
        if (files === undefined || files === '') {
            reject(messages.unselectedImage)
        }
        resolve()
    })
}
