const UserModel = require('../models/user-model');
const MonumentModel = require('../models/monument-model');
const ApiError = require('../exceptions/api-error');


class GameService {
    async getAllMonument() {
        const monument = await MonumentModel.find();
        return monument;
    }

}

module.exports = new GameService();
