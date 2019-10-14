const Note = require('../models/NoteContainer')

module.exports = {
    create,
    noteCard, 
    deleteOne,
    update,
    show,

};

async function update(req, res) {
    const updatenote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status.json(updatenote);

}

async function deleteOne(req, res) {
    const deletedNote = await Note.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedNote);
}

async function create(req, res) {
    const notes = await Note.create(req.body)
    res.status(200).json(notes)
}

async function show(req,res) {
    const notes = await Note.findById(req.params.id);
    res.json( notes )
}


// function create(score) {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//         // Add this header - don't forget the space after Bearer
//         'Authorization': 'Bearer ' + tokenService.getToken()
//       },
//       body: JSON.stringify(score)
//     };
//     return fetch(BASE_URL, options).then(res => res.json());
//   }
//     try {
//         await Note.create(req.body);
//         NoteCard(req, res);
//     } catch (err) {
//         res.json({err});
//     }
// }

async function noteCard(req , res) {
    const notes = await Note.find({})
    res.status(200).json(notes)
}