const router = require('express').Router();
let Character = require('../models/character.model');

router.route('/').get( (req, res) => {
  Character.find()
  .then(chars => res.json(chars))
  .catch(err => res.status(400).json('Error: ', err));
});

router.route('/add').post( (req, res) => {
  const charname = req.body.charname;

  const newChar = new Character({charname});

  newChar.save()
  .then(() => res.json('Character Added'))
  .catch( err => res.status(400).json('Error: ', err));
});

module.exports = router;