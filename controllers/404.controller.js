const messages = require('../services/messages')
module.exports = (req,res) => {
    res.status(404).json({error: messages.routeNotFound})
}