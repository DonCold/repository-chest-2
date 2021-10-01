import Notes from '../components/Notes'

import FormNotes from '../components/FormNotes'

const NotesPage = ({ user, logout, notes, addNote, loading }) => {
  return (
    <>
      {
      user && <div><br />
            <FormNotes sendNote={addNote} />
            <button onClick={logout}>Cerrar Sesion</button>
          </div>
      }
      <Notes notes={notes} loading={loading} />
    </>
  )
}

export default NotesPage
