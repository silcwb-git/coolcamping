const restful = require('node-restful')
const mongoose = restful.mongoose

const ukSchema = new mongoose.Schema ({
    name: {type: String, required: true },
    link: {type: String, required: true},
    summary: {type: String, required: true},
    location: {type: String, required: false}
})

module.exports = restful.moodel('coolcamping', ukSchema)