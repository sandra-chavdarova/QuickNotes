const router = require('express').Router();
const Note = require('../models/Note');

router.get('/', async (req, res) => {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
});

router.post('/', async (req, res) => {
    const note = new Note(req.body);
    const saved = await note.save();
    res.status(201).json(saved);
});

router.put('/:id', async (req, res) => {
    const updated = await Note.findByIdAndUpdate(req.id, req.body, { new: true });
    res.json(updated);
});

router.delete('/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted' });
});

module.exports = router;