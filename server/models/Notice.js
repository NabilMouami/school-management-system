const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const noticeSchema = new mongoose.Schema({
    message: { type: String, required: true },
    date: { type: Date, required: true },
    techear: { type: String, required: true },
    module: { type: String, required: true },
})
const Notice =  mongoose.model('Notice', noticeSchema);
module.exports = Notice;