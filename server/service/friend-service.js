const UserModel = require('../models/user-model');
const ApiError = require('../exceptions/api-error');



class friendService {
    async subscribe(userName, friendName) {
        const userData = await UserModel.findOne({userName: userName})
        const friendData = await UserModel.findOne({userName: friendName})

        if(userData.friends.friendRequests.includes(friendName)){
            throw ApiError.BadRequest(`Вы уже отправили заявку пользователю ${friendName}`)
        }

        userData.friends.friendRequests.push(friendName)
        friendData.friends.subscribers.push(userName)

        userData.save();
        friendData.save();
    }

    async removeFriend(userName, friendName) {
        const userData = await UserModel.findOne({userName: userName}) // ПОЛЬЗОВАТЕЛЬ
        const friendData = await UserModel.findOne({userName: friendName}) // УДАЛЯЕМЫЙ ДРУГ

        if(!userData.friends.friends.includes(friendName)){
            throw ApiError.BadRequest(`Пользователь ${userName} не является вашим другом`)
        }

        userData.friends.friends.pull(friendName)
        friendData.friends.friends.pull(userName)

        userData.save();
        friendData.save();
    }

    async acceptFriend(userName, friendName) {
        const userData = await UserModel.findOne({userName: userName}) // ПОЛЬЗОВАТЕЛЬ
        const friendData = await UserModel.findOne({userName: friendName}) // ПРИНИМАЕМЫЙ ДРУГ

        if(userData.friends.friends.includes(friendName)){
            throw ApiError.BadRequest(`Вы уже друзья с пользователем ${friendName}`)
        }
        if(!userData.friends.subscribers.includes(friendName)){
            throw ApiError.BadRequest(`Пользователя ${friendName} нет в ваших подписчиках`)
        }

        userData.friends.subscribers.pull(friendName);
        friendData.friends.friendRequests.pull(userName);

        userData.friends.friends.push(friendName)
        friendData.friends.friends.push(userName)

        userData.save();
        friendData.save();
    }
    async dismissFriend(userName, friendName) {
        const userData = await UserModel.findOne({userName: userName}) // ПОЛЬЗОВАТЕЛЬ
        const friendData = await UserModel.findOne({userName: friendName}) // ОТКЛОНЯЕМЫЙ ПОЛЬЗОВАТЕЛЬ

        if(!userData.friends.subscribers.includes(friendName)){
            throw ApiError.BadRequest(`Пользователя ${friendName} не является вашим подписчиком`)
        }

        userData.friends.subscribers.pull(friendName)
        friendData.friends.friendRequests.pull(userName)

        userData.save();
        friendData.save();
    }
    
    async unsubscribe(userName, friendName) {
        const userData = await UserModel.findOne({userName: userName})
        const friendData = await UserModel.findOne({userName: friendName})

        if(!userData.friends.friendRequests.includes(friendName)){
            throw ApiError.BadRequest(`Вы не подписаны на пользователя ${friendName}`)
        }

        userData.friends.friendRequests.pull(friendName)
        friendData.friends.subscribers.pull(userName)

        userData.save();
        friendData.save();
    }

}

module.exports = new friendService();
