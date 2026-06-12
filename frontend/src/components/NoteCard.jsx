function NoteCard({ note, onDelete }) {
    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <small>{new Date(note.createdAt).toLocaleDateString()}</small>
            <br />
            <button onClick={() => onDelete(note._id)}>Delete</button>
        </div>
    )
}

export default NoteCard