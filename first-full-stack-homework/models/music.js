const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  artist: {type: String, required: true},
  album: String,
  coverImg: String
});


module.exports = mongoose.model('Music', musicSchema);