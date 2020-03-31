const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moveSchema = new Schema({
  moveName: { type: String, trim: true },
  charID: { type: Number },
  input: { type: String, trim: true },
  type: { type: String, trim: true },
  damage: { type: Number },
  chipDamage: { type: Number },
  startup: { type: Number },
  active: { type: Number },
  recovery: { type: Number },
  cancel: { type: Number },
  hitAdvantage: { type: Number },
  blockAdvantage: { type: Number },
  flawlessBlockAdvantage: { type: Number },
  chain: { type: String, trim: true }

}, { collection: 'comboStrings' });

const Move = mongoose.model('ComboString', moveSchema);

module.exports = Move;