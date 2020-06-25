const CoolCamping = require('./coolcamping')

CoolCamping.methods(['get', 'post', 'put', 'delete'])
CoolCamping.updateOptions({new: true, runValidators: true})

module.exports = CoolCamping