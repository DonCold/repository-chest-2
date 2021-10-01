import { useState, useEffect } from 'react'

import { submitNotes, getAllNotes } from '../services/notes'
import { token } from '../services/login'

export const useNotes = () => {
  const [loadingNote, setLoading] = useState(true)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const fetchNote = async () => {
      setLoading(true)

      const notesRes = await getAllNotes()
      setNotes(notesRes)

      setLoading(false)
    }

    fetchNote()
  }, [setLoading])

  const addNote = async ({ title, content }) => {
    const noteToAddToState = {
      title,
      content
    }

    await submitNotes(noteToAddToState, { token })
    const newNotes = await getAllNotes()
    setNotes(newNotes)
  }

  return {
    notes,
    setNotes,
    addNote,
    loadingNote
  }
}
