import { useState, useEffect } from 'react'

import { getAllNotes } from '../services/notes'
import Note from './Note'

const FetchNotes = ({ notes, setNotes }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNote = async () => {
      setLoading(true)

      const notesRes = await getAllNotes()
      setNotes(notesRes)

      setLoading(false)
    }

    fetchNote()
  }, [setNotes])

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
