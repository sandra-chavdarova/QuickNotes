import { useState, useEffect } from 'react'
import { getNotes, createNote, deleteNote } from './api'
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'

function App() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes().then(res => setNotes(res.data))
    }, [])

    const handleCreate = async (noteData) => {
        await createNote(noteData)
        getNotes().then(res => setNotes(res.data))
    }

    const handleDelete = async (id) => {
        await deleteNote(id)
        getNotes().then(res => setNotes(res.data))
    }

    const handleUpdate = () => {
        getNotes().then(res => setNotes(res.data))
    }

    return (
        <div>
            <h1>QuickNotes</h1>
            <p className="subtitle">Simple notes, always within reach.</p>
            <NoteForm onSubmit={handleCreate} />
            {notes.length > 0 && <p className="notes-header">{notes.length} note{notes.length !== 1 ? 's' : ''}</p>}
            <NoteList notes={notes} onDelete={handleDelete} onUpdate={handleUpdate} />
        </div>
    )
}

export default App