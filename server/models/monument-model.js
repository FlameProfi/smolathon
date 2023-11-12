
const {Schema, model} = require('mongoose');

const MonumentSchema = new Schema({
    photo: {type: String},
    name: {type: String, unique: true},
    description: {type: String},
})

module.exports = model('Monument', MonumentSchema);
