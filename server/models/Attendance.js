const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const attendanceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cne: { type: String, required: true },
    attendance: { type: String, required: true },
    date: { type: Date, required: true }
})
const Attendance =  mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;