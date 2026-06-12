const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: { type: String, required: false, default: '' },
    content: { type: String, required: false, default: '' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', NoteSchema);