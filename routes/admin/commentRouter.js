const commentController = require('../../controllers/admin/comments.controller')
module.exports = (router) => {
    router.route('/comments').get(commentController.comments)
}