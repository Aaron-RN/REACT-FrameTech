const router = require('express').Router();
let basicAttacks = require('../models/basicAttack.model');

router.route('/').get( (req, res) => {
  basicAttacks.find()
  .then(moves => res.json(moves))
  .catch(err => res.status(400).json('Error: ', err));
});

router.route('/add').post( (req, res) => {
  const moveName = req.body.moveName;
  const charID = req.body.charID;
  const input = req.body.input;
  const type = req.body.type;
  const damage = req.body.damage;
  const chipDamage = req.body.chipDamage;
  const startup = req.body.startup;
  const active = req.body.active;
  const recovery = req.body.recovery;
  const cancel = req.body.cancel;
  const hitAdvantage = req.body.hitAdvantage;
  const blockAdvantage = req.body.blockAdvantage;
  const flawlessBlockAdvantage = req.body.flawlessBlockAdvantage;
  const chain = req.body.chain;
  const newMove = new basicAttacks(
    {
      moveName,
      charID,
      input,
      type,
      damage,
      chipDamage,
      startup,
      active,
      recovery,
      cancel,
      hitAdvantage,
      blockAdvantage,
      flawlessBlockAdvantage,
      chain
    }
  );

  newMove.save()
  .then(() => res.json('new Basic Attack Added'))
  .catch( err => res.status(400).json('Error: ', err));
});

module.exports = router;