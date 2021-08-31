import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import './config'
import './database.js'
import Note from './models/Note.js'
import { notFound } from './middlewares/notFound'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

app.get('/', async (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', async (req, res) => {
  const notes = await Note.find()
  res.json(notes)
})

app.get('/api/notes/:id', async (req, res) => {
  const { id } = req.params
  const note = await Note.findById(id).catch(() => {})
  res.json(note)
})

app.delete('/api/notes/:id', async (req, res) => {
  const { id } = req.params
  const deletedNote = await Note.findByIdAndDelete(id).catch(() => {})
  res.json(deletedNote)
})

app.post('/api/notes', async (req, res) => {
  const { title, content } = req.body
  const note = new Note({ title, content })
  const saveNote = await note.save()

  res.status(201).json(saveNote)
})

app.put('/api/notes/:id', async (req, res) => {
  const { id } = req.params
  const { title, content } = req.body

  const updatedNote = await Note.findByIdAndUpdate(id, {
    title,
    content
  }, { new: true }).catch(() => {})
  res.json(updatedNote)
})

app.use(notFound)

const server = app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

export { app, server }
