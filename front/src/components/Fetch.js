import { useState, useEffect } from 'react';

import { getAllNotes } from '../services/notes';
import Note from './Note';

const FetchNotes = ({ notes, setNotes }) => {
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchNote = async () => {
      setLoading(true);

      const notesRes = await getAllNotes()
      setNotes( notesRes );

      setLoading(false);
    }

    fetchNote();
  }, [setNotes]);

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
    </>
  )
}

export default FetchNotes;
