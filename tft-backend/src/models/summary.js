const mongoose = require('mongoose');
const {Schema} = mongoose;

const Summary = new Schema({
    date: {type: Date, default: Date.now},
    summary: [{name: String, count: Number}]
});

module.exports = mongoose.model('Summary', Summary);