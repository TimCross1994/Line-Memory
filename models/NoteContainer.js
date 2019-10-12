var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    front: String,
    back: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

},{
    timestamps: true
}
);

module.exports = mongoose.model('Note', NoteSchema);