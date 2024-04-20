const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
    option: {
        type: String,
        required: true,
        unique: true,
    },
    count: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model('Cschema', countSchema);
