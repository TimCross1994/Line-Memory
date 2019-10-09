var Note = require('../models/NoteContainer')

module.exports = {
    create,
    noteCard
}

async function create(req, res) {
    console.log('user: ', req.user)
    try {
        await Note.create(req.body);
        NoteCard(req, res);
    } catch (err) {
        res.json({err});
    }
}

async function noteCard(req , res) {
    const notes = await NoteCard.findById(req.params.id)
    res.json(notes);
}