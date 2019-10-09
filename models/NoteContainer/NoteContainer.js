const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    front: String,
    back: String
})

module.exports = mongoose.model('Note', NoteSchema);