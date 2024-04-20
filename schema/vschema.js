const mongoose = require('mongoose');

const cSchema = new mongoose.Schema({
    uniqueid: {
        type: String,
    },
    name: {
        type: String
    },
    phone: {
        type: String,
    },
    option: {
        type: String,
    }
})

module.exports = mongoose.model('Vschema', cSchema);