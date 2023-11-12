const UserModel = require('../models/user-model');
const FriendModel = require('../models/friends-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const generatePassword = require("omgopass");
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');



class friendService {
    async addFriend(name, recivedName) {
        const friendData = await FriendModel.findOne({userName: name})
        const senderData = await FriendModel.findOne({userName: recivedName})
        if(friendData.requestFrineds.includes(recivedName)){
            throw ApiError.BadRequest(`Вы уже отправили заявку пользователю ${name}`)
        }

        friendData.requestFrineds.push(recivedName)
        senderData.subscribe.push(name)
        friendData.save();
        senderData.save();
        return senderData.friends
    }

    async removeFriend(name, recivedName) {
        const friendData = await FriendModel.findOne({userName: name}) // ОТПРАВИТЕЛЬ
        const senderData = await FriendModel.findOne({userName: recivedName}) // ПОЛУЧАТЕЛЬ
        if(!friendData.friends.includes(recivedName)){
            throw ApiError.BadRequest(`Пользователь ${name} не является вашим другом`)
        }
        friendData.friends.pull(recivedName)
        senderData.friends.pull(name)
        friendData.save();
        senderData.save();
    }

    async acceptFriend(name, recivedName) {
        const friendData = await FriendModel.findOne({userName: name}) // ПРИНИМАЕТ В ДРУЗЬЯ
        const senderData = await FriendModel.findOne({userName: recivedName}) // ПОЛУЧАТЕЛЬ
        if(friendData.friends.includes(recivedName)){
            throw ApiError.BadRequest(`Вы уже друзья с пользователем ${name}`)
        }
        if(!friendData.subscribe.includes(recivedName)){
            throw ApiError.BadRequest(`Ошибка`)
        }
        friendData.subscribe.pull(recivedName)
        senderData.requestFrineds.pull(name)
        friendData.friends.push(recivedName)
        senderData.friends.push(name)
        friendData.save();
        senderData.save();
    }
    async dismissFriend(name, recivedName) {
        const friendData = await FriendModel.findOne({userName: name}) // ОТПРАВИТЕЛЬ
        const senderData = await FriendModel.findOne({userName: recivedName}) // ПОЛУЧАТЕЛЬ
        if(!friendData.subscribe.includes(recivedName)){
            throw ApiError.BadRequest(`Пользователя ${recivedName} нету в запросах`)
        }
        friendData.subscribe.pull(recivedName)
        senderData.requestFrineds.pull(name)
        friendData.save();
        senderData.save();
    }
    

}

module.exports = new friendService();
