const moment = require('jalali-moment')

module.exports.toJalaliDate = (date) => {
    return moment(date).locale('fa').format('dddd, YYYY-M-D')

}