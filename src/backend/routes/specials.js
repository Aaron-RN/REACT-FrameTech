const router = require('express').Router();
let specialMoves = require('../models/specials.model');

router.route('/').get( (req, res) => {
  specialMoves.find()
  .then(moves => res.json(moves))
  .catch(err => res.status(400).json('Error: ', err));
});

module.exports = router;