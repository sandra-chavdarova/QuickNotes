import { useState } from 'react'
import { updateNote } from '../api'

function NoteCard({ note, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(note.title)
    const [content, setContent] = useState(note.content)

    const handleSave = async () => {
        await updateNote(note._id, { title, content })
        onUpdate()
        setIsEditing(false)
    }

    if (isEditing) {
        return (
            <div className="note-card">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title (optional)"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your note here..."
                />
                <div className="note-actions">
                    <button className="btn-primary" onClick={handleSave}>Save</button>
                    <button className="btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            </div>
        )
    }

    return (
        <div className="note-card">
            <div className="note-meta">{new Date(note.createdAt).toLocaleDateString()}</div>
            <h3>{note.title || `Text Note (${new Date(note.createdAt).toLocaleDateString()})`}</h3>
            {note.content && <p className="note-content">{note.content}</p>}
            <div className="note-actions">
                <button className="btn-secondary" onClick={() => setIsEditing(true)}>Edit</button>
                <button className="btn-danger" onClick={() => onDelete(note._id)}>Delete</button>
            </div>
        </div>
    )
}

export default NoteCard