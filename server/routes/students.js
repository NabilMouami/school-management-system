const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
  Student.find()
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const {Fullname,Lastname,Cne,Cni,Email,Phonenumber,Grade,Rollno,Session,Gender,Fee } = req.body;
    const newstudent = new Student({
      Fullname,
      Lastname,
      Cne,
      Cni,
      Email,
      Phonenumber,
      Grade,
      Rollno,
      Session,
      Gender,
      Fee
});
newstudent.save()
.then(() => res.json('Student added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Student.findById(req.params.id)
      .then(student => res.json(student))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
      .then(() => res.json('Student deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    console.log(req.body)
    Student.findById(req.params.id)
      .then(student => {
        student.Fullname = req.body.fullname;
        student.Lastname = req.body.lastname;
        student.Cne = req.body.cne;
        student.Cni = req.body.cni;
        student.save()
          .then(() => res.json('Student updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;
