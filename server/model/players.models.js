const mongoose = require('mongoose')
const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      minlength: [2, 'name should be at least 2 charachters'],
    },
    position: {
      type: String,
      minlength: [2, 'name should be at least 2 charachters'],
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
)
const Player = mongoose.model('Player', PlayerSchema)
module.exports = Player
