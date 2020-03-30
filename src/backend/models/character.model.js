const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const characterSchema = new Schema({
  charname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 20
  },
}, { collection: 'characters' });

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;