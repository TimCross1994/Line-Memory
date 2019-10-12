const express = require('express')
const router = express.Router();
const NoteContainer= require('../../controllers/NoteContainer')

router.get('/', NoteContainer.noteCard)
router.get('/:id', NoteContainer.show)
router.post('/', NoteContainer.create);
router.put('/:id', NoteContainer.update)
router.delete('/', NoteContainer.deleteOne)
// 
// router.edit('/', NoteContainer.noteCard)



// router.post('/', checkAuth, NoteContainerCtrl.create);

// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'})
// }

module.exports = router;