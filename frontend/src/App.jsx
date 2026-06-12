import { useState, useEffect } from 'react'
import { getNotes, createNote, deleteNote } from './api'
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    loadNotes()
  }, [])

  const loadNotes = async () => {
    const res = await getNotes()
    setNotes(res.data)
  }

  const handleCreate = async (noteData) => {
    await createNote(noteData)
    loadNotes()
  }

  const handleDelete = async (id) => {
    await deleteNote(id)
    loadNotes()
  }

  return (
      <div>
        <h1>QuickNotes</h1>
        <NoteForm onSubmit={handleCreate} />
        <NoteList notes={notes} onDelete={handleDelete} />
      </div>
  )
}

export default App