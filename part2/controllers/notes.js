import { Router } from 'express'
import Note from '../models/Note'

const noteRouter = Router()

noteRouter.get('/', async (req, res) => {
  const notes = await Note.find()
  res.json(notes)
})

noteRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const note = await Note.findById(id).catch(() => {})
  res.json(note)
})

noteRouter.delete('/:id', async (req, res) => {
  const { id } = req.params
  const deletedNote = await Note.findByIdAndDelete(id).catch(() => {
    return res.status(404).json({ message: 'Note not found' })
  })

  if (!deletedNote) return res.status(404).json({ message: 'Note not found' })
  res.status(200).json(deletedNote)
})

noteRouter.post('', async (req, res) => {
  const { title, content } = req.body
  const note = new Note({ title, content })
  const saveNote = await note.save()

  res.status(201).json(saveNote)
})

noteRouter.put('/:id', async (req, res) => {
  const { id } = req.params
  const { title, content } = req.body

  const updatedNote = await Note.findByIdAndUpdate(id, {
    title,
    content
  }, { new: true }).catch(() => {})
  res.json(updatedNote)
})

export default noteRouter
