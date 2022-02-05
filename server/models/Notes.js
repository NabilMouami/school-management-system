const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  Fullname: { type: String, required: true },
  Lastname: { type: String, required: true },
  Cne: { type: String, required: true },
  Cni: { type: String, required: true },
  Grade: { type: String, required: true },
  Rollno: { type: Number, required: true },
  Session: { type: String, required: true },
  Mark1englich: { type: Number, required: true },
  Mark2englich: { type: Number, required: true },
  Marktenglich: { type: Number, required: true },
  Mark1physic: { type: Number, required: true },
  Mark2physic: { type: Number, required: true },
  Marktphysic: { type: Number, required: true },
  Mark1chymie: { type: Number, required: true },
  Mark2chymie: { type: Number, required: true },
  Marktchymie: { type: Number, required: true },
  Mark1mathematics: { type: Number, required: true },
  Mark2mathematics: { type: Number, required: true },
  Marktmathematics: { type: Number, required: true },
  Mark1phylosophi: { type: Number, required: true },
  Mark2phylosophi: { type: Number, required: true },
  Marktphylosophi: { type: Number, required: true }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;