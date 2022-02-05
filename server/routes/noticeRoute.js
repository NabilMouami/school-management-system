const router = require('express').Router();
let Notice = require('../models/Notice');

router.route('/').get((req, res) => {
    Notice.find()
      .then(notice=> res.json(notice))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  
router.route('/add').post((req, res) => {
    console.log(req.body)
    const { message,date,techear,module } = req.body;
    const newnotice = new Notice({
      message,
      date,
      techear,
      module
});
newnotice.save()
.then(() => res.json('Notice added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Notice.findById(req.params.id)
      .then(notice => res.json(notice))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Notice.findByIdAndDelete(req.params.id)
      .then(() => res.json('notice deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;
