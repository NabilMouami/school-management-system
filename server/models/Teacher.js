const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  username: { type: String, required: true },
  module: { type: String, required: true },
  salaire: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;