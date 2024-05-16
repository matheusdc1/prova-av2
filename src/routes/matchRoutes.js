const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

router.post('/matches', matchController.createMatch);
router.get('/matches', matchController.getMatches);
router.put('/matches/:id', matchController.updateMatch);
router.delete('/matches/:id', matchController.deleteMatch);

module.exports = router;
