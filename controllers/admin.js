const Upload = require('../services/upload')
const messages = require('../services/messages')
const mediaModel = require('../models/media')
const articleModel = require('../models/article')
const categoryModel = require('../models/category')
module.exports.dashboard = async (req, res) => {
    let data = {}
    data.articleCounts = await articleModel.counts()
    res.render('admin/dashboard', {layout: 'index', data})
}
module.exports.blog = async (req, res) => {
    const articles = await articleModel.paginateArticle(1, 10)
    console.log(articles)
    res.render('admin/dashboard', {layout: 'blog', data: articles})
}
module.exports.comments = (req, res) => {
    res.render('admin/dashboard', {layout: 'comments', data: ''})
}
module.exports.saveCategory = async (req, res) => {
    try {
        console.log(req.body)
        const category = await categoryModel.create(req.body)
        res.status(200).send({message: messages.successSaveCategory, category})
    } catch (e) {
        res.status(400).send({messages: e.messages})
    }
}
module.exports.showArticleForm = async (req, res) => {
    let data = {}
    data.categories = await categoryModel.all()
    res.render('admin/dashboard', {layout: 'addArticle', data})
}
module.exports.saveArticle = async (req, res) => {
    new Upload('articles', 'cover').uploadImages()(req, res, async (err) => {
        if (err) {
            res.status(400).send({message: err.message})
        } else {
            try {
                await isImagesSent(req.file)
                await storingFilesAndArticle(req.file, req.body, res)
            } catch (e) {
                res.status(400).send({message: messages.unselectedImage})
            }
        }
    })
}

async function storingFilesAndArticle(coverInfo, article, res) {
    try {
        await saveArticle(await saveImagesInfo(coverInfo), article)
        res.status(200).send({message: messages.successSaveArticle})
    } catch (e) {
        res.status(400).send({message: e.message})
    }
}

async function saveImagesInfo(coverInfo) {
    const media = await mediaModel.create(coverInfo)
    return media._id
}

async function saveArticle(coverId, article) {
    article.coverId = coverId
    return await articleModel.create(article)
}

function isImagesSent(file) {
    return new Promise((resolve, reject) => {
        if (file === undefined || file === '') {
            reject(messages.unselectedImage)
        }
        resolve()
    })
}
