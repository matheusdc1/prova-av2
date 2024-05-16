const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.post('/players', playerController.createPlayer);
router.get('/players', playerController.getPlayers);
router.put('/players/:id', playerController.updatePlayer);
router.delete('/players/:id', playerController.deletePlayer);
router.put('/players/:id/team', playerController.associatePlayerToTeam);

module.exports = router;
