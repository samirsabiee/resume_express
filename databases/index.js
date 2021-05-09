const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
module.exports = mongoose.connect(`${process.env.DB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(data => {
    console.log('Database Success Connected')
}).catch(err => {
    console.log('Database Error : ', err)
});
