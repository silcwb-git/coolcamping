const express = require ('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/coolcamping', router)

    const CoolCamping = require('../api/coolcamping/coolcampingService')
    CoolCamping.register(router, '/coolcamping')

}
 