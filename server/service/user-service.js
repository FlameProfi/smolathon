const UserModel = require('../models/user-model');


class UserService {
    async getAllUsers() {
        const users = await UserModel.find();
        return users;
    }

    async uploadPhoto(name, urlPhoto){
        const user = await UserModel.findOne(userName);
        user.photoUrl = urlPhoto;
        return user.save();
    }

}

module.exports = new UserService();
