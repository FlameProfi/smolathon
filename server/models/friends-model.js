const {Schema, model} = require('mongoose');

const FriendSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: {type: String, unique: true, required: true},
    friends: {type: Array},
    subscribe: {type: Array},
    requestFrineds: {type: Array},
})

module.exports = model('Friends', FriendSchema);
