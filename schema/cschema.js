const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
    option: {
        type: String,
        required: true,
        unique: true,
        enum: ['01-राजमहल', '02-बोरियों', '03-बरहेट'],
    },
    count: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model('Cschema', countSchema);
