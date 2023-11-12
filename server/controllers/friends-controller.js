const userService = require('../service/user-service');
const friendService = require('../service/friend-service') 
const ApiError = require('../exceptions/api-error');
const {validationResult} = require('express-validator');
const FriendModel = require("../models/friends-model");

class FriendController {
    async addFriend(req, res, next) {
        try {
            const {name, recivedName} = req.body;
            await friendService.addFriend(name, recivedName);
            return res.json('Пользователь добавлен в друзья')
            // return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            next(e);
        }
    }
    async removeFriend(req, res, next) {
        try {
            const {name, recivedName} = req.body;
            await friendService.removeFriend(name, recivedName)
            return res.json('Пользователь удален из друзей')
        } catch (e) {
            next(e);
        }
    }
    async acceptFriend(req, res, next) {
        try {
            const {name, recivedName} = req.body;
            await friendService.acceptFriend(name, recivedName)
            return res.json('Пользователь добавлен в друзья')
        } catch (e) {
            next(e);
        }
    }
    async dismissFriend(req, res, next) {
        try {
            const {name, recivedName} = req.body;
            await friendService.dismissFriend(name, recivedName)
            return res.json('Заявка в друзья отклонена!')
        } catch (e) {
            next(e);
        }
    }    
    async allFriends(req, res, next){
        try { 
            const name = req.params.name;
            const friendData = await FriendModel.findOne({userName: name})
        return res.json(friendData.friends)
    } catch (e) {
        next(e)
    }
    }
    async allSubscribers(req, res, next){
        try {
            const name = req.params.name;
            const friendData = await FriendModel.findOne({userName: name})
            return res.json(friendData.subscribe)
        } catch (e) {
            next(e)
        }

    }
    async allRequsted(req, res, next){
        try {
            const name = req.params.name;
            const friendData = await FriendModel.findOne({userName: name})
            return res.json(friendData.requestFrineds)     
        } catch (e) {
            next(e)
        }

    }
    
}

module.exports = new FriendController();
