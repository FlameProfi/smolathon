const gameController = require('../controllers/game-controller');
const Router = require('express').Router;const Router = require('express').Router;
const router = new Router();


router.get('/getMonumentInfo', gameController.getMonument);

module.exports = router