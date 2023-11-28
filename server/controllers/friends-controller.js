const friendService = require('../service/friend-service') 

const FriendModel = require("../models/friends-model");
const userModel = require('../models/user-model');

class FriendController {
    async subscribe(req, res, next) {
        try {
            const {userName, friendName} = req.body;
            await friendService.subscribe(userName, friendName);
            return res.json('Пользователь добавлен в друзья')
        } catch (e) {
            next(e);
        }
    }
    async removeFriend(req, res, next) {
        try {
            const {userName, friendName} = req.body;
            await friendService.removeFriend(userName, friendName)
            return res.json('Пользователь удален из друзей')
        } catch (e) {
            next(e);
        }
    }
    async acceptFriend(req, res, next) {
        try {
            const {userName, friendName} = req.body;
            await friendService.acceptFriend(userName, friendName)
            return res.json('Пользователь добавлен в друзья')
        } catch (e) {
            next(e);
        }
    }
    async dismissFriend(req, res, next) {
        try {
            const {userName, friendName} = req.body;
            await friendService.dismissFriend(userName, friendName)
            return res.json('Заявка в друзья отклонена!')
        } catch (e) {
            next(e);
        }
    }    

    async unsubscribe(req, res, next) {
        try {
            const {userName, friendName} = req.body;
            await friendService.unsubscribe(userName, friendName)
        } catch (e) {

        }
    }

    async getFriendsByName(req, res, next){
        try { 
            const userName = req.params.name;
            const userData = await userModel.findOne({userName})
            
        return res.json(userData.friends.friends)
    } catch (e) {
        next(e)
    }
    }
    async getSubscribersByName(req, res, next){
        try {
            const userName = req.params.name;
            const UserData = await userModel.findOne({userName})
            return res.json(UserData.friends.subscribers)
        } catch (e) {
            next(e)
        }

    }
    async getFriendRequestsByName(req, res, next){
        try {
            const userName = req.params.name;
            const UserData = await userModel.findOne({userName})
            return res.json(UserData.friends.friendRequests)     
        } catch (e) {
            next(e)
        }

    }
    
}


module.exports = new FriendController();
