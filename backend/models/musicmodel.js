const { Schema, model } = require('../connection');
const schemaObject = new Schema({
    tilte: String,
    description: String,
    author:String,
    lyrics: String,
    image:String,
    musicfile:String,
    createdat:Date,
})

module.exports = model('users', schemaObject);