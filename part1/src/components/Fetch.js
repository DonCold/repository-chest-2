import { useState, useEffect } from 'react';

import { getAllNotes, submitNotes } from '../services/notes';

const Note = ({ title, body }) => {
  return (
    <li>
      <strong>{ title }</strong>
      <p>{ body }</p>
    </li>
  )
}

const FormNotes = ({ sendNote }) => {
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
    <form onSubmit={handleSubmit}>
      <input type="text" value={newNote} onChange={handleChange} />
      <button type="submit">Crear Nota</button>
    </form>
  )
}

const FetchNotes = () => {
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
      userId: 1,
      title: newNote,
      body: newNote
    }
    const postRes = await submitNotes( noteToAddToState );
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
            <Note key={ note.id } title={ note.title } body={ note.body } />
          ) )
        }
      </ol>
      <FormNotes sendNote={handleSubmit} />
    </>
  )
}

export default FetchNotes;
