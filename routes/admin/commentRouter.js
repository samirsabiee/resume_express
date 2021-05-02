const commentController = require('../../controllers/admin/commentsController')
module.exports = (router) => {
    router.route('/comments').get(commentController.comments)
}