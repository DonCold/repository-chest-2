import { useParams } from 'react-router-dom'

const NoteDetail = ({ notes }) => {
  const { noteId } = useParams()

  const note = notes.find(note => note.id === noteId)
  if (!note) return null

  return (
    <div>
      <h1>{ note.title }</h1>
      <strong><small>{ note.user?.name }</small></strong>
      <p>{ note.content }</p>
    </div>
  )
}

export default NoteDetail
