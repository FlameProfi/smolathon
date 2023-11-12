const userService = require('../service/user-service');
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
async getRating(req, res, next) {
    try {
        const users = await userService.getAllUsers();
        const sortedUsers = users.sort((a, b) => a.winGames - b.winGames);
        const cutSortedUsers = sortedUsers.splice(1, sortedUsers.length - 1)
        return res.json(cutSortedUsers);
    } catch (e) {
        next(e);
    }
}
}

module.exports = new GameController();
