const playerController = require('../controller/players.controler')
module.exports = (app) => {
  app.get('/players', playerController.findAllPlayer)
  app.get('/players/:id', playerController.findPlayer)
  app.post('/players/new', playerController.newPlayer)
  app.delete('/players/:id/delete', playerController.deletePlayer)
  app.put('/players/:id/edit', playerController.updatePlayer)
}
