const Player = require('../model/players.models')

const findAllPlayer = (req, res) => {
  console.log(Player)
  Player.find()
    .then((allPlayers) => res.json({allPlayers }))
    .catch((err) =>
      res.json({ message: 'something have gone wrong', error: err })
    )
}

const findPlayer = (req, res) => {
  Player.findOne({ _id: req.params.id })
    .then((Player) => res.json({ Player: Player }))
    .catch((err) => res.json({ message: 'something went wrong', error: err }))
}
const newPlayer = (req, res) => {
  Player.create(req.body)
    .then((newPlayer) => {
      res.json({ Player: newPlayer })
    })
    .catch((err) => res.status(400).json(err))
}

const deletePlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}

const updatePlayer = (req, res) => {
  let id = req.params.id
  Player.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPlayer) => res.json({ Player: updatedPlayer }))
    .catch((err) => res.status(400).json(err))
}

module.exports = {
  findAllPlayer,
  findPlayer,
  deletePlayer,
  updatePlayer,
  newPlayer,
}
