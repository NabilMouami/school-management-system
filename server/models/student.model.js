const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  Fullname: { type: String, required: true },
  Lastname: { type: String, required: true },
  Cne: { type: String, required: true },
  Cni: { type: String, required: true },
  Email: { type: String, required: true },
  Phonenumber: { type: Number, required: true },
  Grade: { type: String, required: true },
  Rollno: { type: Number, required: true },
  Session: { type: String, required: true },
  Gender: { type: String, required: true },
  Fee: { type: String, required: true }
  
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;