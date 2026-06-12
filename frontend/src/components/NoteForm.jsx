import { useState } from 'react'

function NoteForm({ onSubmit }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title && !content) return
        onSubmit({ title, content })
        setTitle('')
        setContent('')
    }

    return (
        <div className="form-card">
            <h2>New Note</h2>
            <input
                type="text"
                placeholder="Title (optional)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Write your note here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button className="btn-primary" onClick={handleSubmit}>Add Note</button>
        </div>
    )
}

export default NoteForm