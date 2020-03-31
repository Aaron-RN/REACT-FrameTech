const router = require('express').Router();
let allMoves = require('../models/allMoves.model');

router.route('/').get( (req, res) => {
  allMoves.find()
  .then(moves => res.json(moves))
  .catch(err => res.status(400).json('Error: ', err));
});

module.exports = router;