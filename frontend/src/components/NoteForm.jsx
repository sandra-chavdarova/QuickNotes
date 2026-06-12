import { useState } from 'react'

function NoteForm({ onSubmit }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !content) return
        onSubmit({ title, content })
        setTitle('')
        setContent('')
    }

    return (
        <div>
            <h2>New Note</h2>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
        <textarea
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
            </div>
            <button onClick={handleSubmit}>Add Note</button>
        </div>
    )
}

export default NoteForm