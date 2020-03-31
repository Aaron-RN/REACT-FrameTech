const router = require('express').Router();
let comboStrings = require('../models/combos.model');

router.route('/').get( (req, res) => {
  comboStrings.find()
  .then(moves => res.json(moves))
  .catch(err => res.status(400).json('Error: ', err));
});

module.exports = router;