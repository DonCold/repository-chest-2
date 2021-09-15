import { Router } from 'express'
import Note from '../models/Note'
import User from '../models/User'

const noteRouter = Router()

noteRouter.get('/', async (req, res) => {
  const notes = await Note.find().populate('userId', {
    name: 1,
    email: 1
  })
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

noteRouter.post('/', async (req, res) => {
  const { title, content, userId } = req.body
  const user = await User.findById(userId)
  if (!user) return res.status(404).json({ error: 'User not found' })

  const note = new Note({ title, content, userId: user._id })
  const saveNote = await note.save()

  user.notes = user.notes.concat(saveNote._id)
  await user.save()

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
