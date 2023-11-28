const userService = require('../service/auth-service');
const GameService = require('../service/game-service') 
const ApiError = require('../exceptions/api-error');

class GameController {
async getMonument(req, res, next) {
    try {
        const monument = await GameService.getAllMonument();
        return res.json(monument);
    } catch (e) {
        next(e);
    }
}

}

module.exports = new GameController();
