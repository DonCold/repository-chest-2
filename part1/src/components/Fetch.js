import { useState, useEffect } from 'react';

import { handleLogout } from '../services/login'
import { getAllNotes, submitNotes, token } from '../services/notes';

const Note = ({ title, content, user }) => {
  return (
    <li>
      <p><strong>{ title }</strong>: { content } &gt; <small>{ user }</small></p>
    </li>
  )
}

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

const FetchNotes = ({ setUser }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchNote = async () => {
      setLoading(true);

      const notesRes = await getAllNotes();
      setNotes( notesRes );

      setLoading(false);
    }

    fetchNote();
  }, []);

  const handleSubmit = async ( newNote ) => {
    const noteToAddToState = {
      title: newNote,
      content: newNote
    }
    const postRes = await submitNotes( noteToAddToState, { token } );
    setNotes([...notes, postRes]);
  }

  return (
    <>
      <ol>
        {
          loading ? <strong>Cargando...</strong> : ''
        }
        {
          notes?.map( (note) => (
            <Note key={ note.id } title={ note.title } content={ note.content } user={ note.user.name } />
          ) )
        }
      </ol>
      <FormNotes sendNote={handleSubmit} setUser={ setUser } />
    </>
  )
}

export default FetchNotes;
