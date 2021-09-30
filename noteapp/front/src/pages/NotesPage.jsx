import Notes from '../components/Notes'

import { submitNotes, token, getAllNotes } from '../services/notes'
import { handleLogout } from '../services/login'

import FormNotes from '../components/FormNotes'

const NotesPage = ({ notes, setNotes, user, setUser }) => {
  const noteSubmit = async ({ title, content }) => {
    const noteToAddToState = {
      title,
      content
    }

    await submitNotes(noteToAddToState, { token })
    const newNotes = await getAllNotes()
    setNotes(newNotes)
  }

  return (
    <>
      {
      user && <div><br />
            <FormNotes sendNote={noteSubmit} />
            <button onClick={() => { handleLogout(setUser) }}>Cerrar Sesion</button>
          </div>
      }
      <Notes notes={notes} setNotes={setNotes} />
    </>
  )
}

export default NotesPage
