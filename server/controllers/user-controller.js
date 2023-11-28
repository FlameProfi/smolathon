const userService = require('../service/user-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');
const userModel = require('../models/user-model');

class UserController {
    async getUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();
            return res.json(users);
        } catch (e) {
            next(e);
        }
        
    }

    async uploadPhoto(req, res, next) {
        try {
            const {urlPhoto, name} = req.body;
            await userService.uploadPhoto(name, urlPhoto);
            return res.json('Фотография обновлена')
        } catch (e) {
            next(e);
        }
    }

    async getUserByName(req, res, next) {
        try {
            const userName = req.params.name;
            const userData = userModel.findOne({userName});
            return res.json(userData)
        } catch (e) {
            next(e)
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

module.exports = new UserController();
