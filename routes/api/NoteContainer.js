const express = require('express')
const router = express.Router();
const NoteContainerCtrl = require('../../controllers/NoteContainer')

router.get('/', NoteContainer.noteCard)

router.use(require('../../config/auth'));
router.post('/', checkAuth, NoteContainerCtrl.create);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'})
}

module.exports = router;