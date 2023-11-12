const {Schema, model} = require('mongoose');

const StatsSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: {type: String, unique: true, required: true},
    winGames: {type: Number, default: 0},
    allGames: {type: Number, default: 0},
    lostGames: {type: Number, default: 0},
})

module.exports = model('Stats', StatsSchema);
