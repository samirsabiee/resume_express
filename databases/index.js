const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
module.exports = mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});