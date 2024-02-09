const router = require('express').Router();
const util = require('../db/utils');
// Get all notes
router.get('/notes', (req, res) => {
  util
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});
router.post('/notes', (req, res) => {
  util
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});
// delete note  by id
router.delete('/notes/:id', (req, res) => {
  util
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});
module.exports = router;





