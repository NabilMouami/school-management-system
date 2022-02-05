const router = require('express').Router();
let Teacher = require('../models/Teacher');

router.route('/').get((req, res) => {
  Teacher.find()
    .then(teacher => res.json(teacher))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const {username,module,salaire,date} = req.body;
    const newteacher = new Teacher({
    username,
    module,
    salaire,
    date
});
newteacher.save()
.then(() => res.json('Teacher added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Teacher.findById(req.params.id)
      .then(teacher => res.json(teacher))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Teacher.findByIdAndDelete(req.params.id)
      .then(() => res.json('Teacher deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    console.log(req.body)
    Teacher.findById(req.params.id)
      .then(teacher => {
        teacher.username = req.body.username;
        teacher.module = req.body.module;
        teacher.salaire = req.body.salaire;
        teacher.date = req.body.date;
        teacher.save()
          .then(() => res.json('Teacher updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;
