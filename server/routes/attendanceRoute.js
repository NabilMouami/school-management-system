const router = require('express').Router();
let Att = require('../models/Attendance');

router.route('/').get((req, res) => {
    Att.find()
      .then(att=> res.json(att))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  
router.route('/add').post((req, res) => {
    console.log(req.body)
    const { name,cne,attendance,date } = req.body;
    const newatt = new Att({
      name,
      cne,
      attendance,
      date
});
newatt.save()
.then(() => res.json('Attendance added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Att.findById(req.params.id)
      .then(att => res.json(att))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Att.findByIdAndDelete(req.params.id)
      .then(() => res.json('attendance deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;
