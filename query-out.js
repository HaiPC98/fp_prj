let FpMonth = require('./src/model/fpmonths')
// let UserFpMonth  = require('../model/userfpmonths')
// let User = require('../model/users')

FpMonth.destroy({where: {}, truncate: true})
.then(result => {console.log('drop db thanh cong')})
.catch(err => {console.log('error', err)})