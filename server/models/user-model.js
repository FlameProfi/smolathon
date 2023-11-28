const {Schema, model} = require('mongoose');


const StatShema = new Schema({
    games: {type: Number, default: 0},
    victories: {type: Number, default: 0},
    losses: {type: Number, default: 0},

})


const RatingShema = new Schema({
    points: {type: Number, default: 0},
})


const ProgressShema = new Schema({
    experience: {type: Number, default: 0},
    level: {type: Number, default: 1},

})


const FriendShema = new Schema({
    friends: {type: [String], default: []},
    subscribers: {type: [String], default: []},
    friendRequests: {type: [String], default: []},
})


const BalanceShema = new Schema({
    defaultResins: {type: Number, default: 0},
    goldResins: {type: Number, default: 0},
})


const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    userName: {type: String, unique: true, required: true},
    status: {type: String},
    photoUrl: {type: String, default: "https://e7.pngegg.com/pngimages/477/727/png-clipart-silhouette-male-silhouette-animals-head.png"},
    
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    
    stat: StatShema,
    rating: RatingShema,
    progress: ProgressShema,
    friends: FriendShema,
    balance: BalanceShema,
})

module.exports = model('User', UserSchema);
