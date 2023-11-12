const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    userName: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    status: {type: String},
    photoUrl: {type: String, default: "https://e7.pngegg.com/pngimages/477/727/png-clipart-silhouette-male-silhouette-animals-head.png"}
})

module.exports = model('User', UserSchema);
