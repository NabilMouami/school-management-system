const router = require('express').Router();
let Note = require('../models/Notes');

router.route('/').get((req, res) => {
  Note.find()
    .then(note => res.json(note))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const {Fullname,Lastname,Cne,Cni,Grade,Rollno,Session,Mark1englich,Mark2englich,Marktenglich,Mark1physic,Mark2physic,Marktphysic
    ,Mark1chymie,Mark2chymie,Marktchymie,Mark1mathematics,Mark2mathematics,Marktmathematics,Mark1phylosophi,Mark2phylosophi,Marktphylosophi } = req.body;
    const newnote = new Note({
      Fullname,
      Lastname,
      Cne,
      Cni,
      Grade,
      Rollno,
      Session,
      Mark1englich,
      Mark2englich,
      Marktenglich,
      Mark1physic,
      Mark2physic,
      Marktphysic,
      Mark1chymie,
      Mark2chymie,
      Marktchymie,
      Mark1mathematics,
      Mark2mathematics,
      Marktmathematics,
      Mark1phylosophi,
      Mark2phylosophi,
      Marktphylosophi
});
newnote.save()
.then(() => res.json('Note added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Note.findById(req.params.id)
      .then(note => res.json(note))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
      .then(() => res.json('Note deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

  
  module.exports = router;
