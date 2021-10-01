import Note from './Note'

const FetchNotes = ({ notes, loading }) => {
  if (loading) return <div>Cargando...</div>

  return (
    <>
      <ol>
        {
          notes.length > 0
            ? notes?.map((note) => (
            <Note key={ note.id } id={note.id} title={ note.title } content={ note.content } user={ note.user?.name } />
            ))
            : 'No hay ninguna nota por el momento.'
        }
      </ol>
    </>
  )
}

export default FetchNotes
