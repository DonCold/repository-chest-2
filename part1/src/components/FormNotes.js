import { useState } from 'react'
import { handleLogout } from '../services/login'

const FormNotes = ({ sendNote, setUser }) => {
  const [newNote, setNewNote] = useState('');

  const handleChange = (e) => {
    setNewNote( e.target.value );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendNote(newNote);
    setNewNote('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newNote} onChange={handleChange} />
        <button type="submit">Crear Nota</button>
      </form>
      <button onClick={() => { handleLogout(setUser) }}>Cerrar Sesion</button>
    </>
  )
}

export default FormNotes;
