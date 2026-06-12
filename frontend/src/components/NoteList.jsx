import NoteCard from './NoteCard'

function NoteList({ notes, onDelete }) {
    if (notes.length === 0) return <p>No notes yet. Create one!</p>

    return (
        <div>
            {notes.map(note => (
                <NoteCard key={note._id} note={note} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default NoteList