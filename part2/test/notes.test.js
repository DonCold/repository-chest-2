import moongose from 'mongoose'

import { server } from '../index'
import Note from '../models/Note'
import {
  api,
  getAllNotes,
  initialNotes,
  newNote
} from './helper'

describe('Notes', () => {
  test('Pagina principal', async () => {
    const res = await api
      .get('/')
      .expect(200)
    expect(res.text).toContain('<h1>Hello World!</h1>')
  })

  test('en un json', async () => {
    const res = await api
      .get('/api/notes')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(res.body).toHaveLength(initialNotes.length)
  })

  test('Verificando Datos', async () => {
    const { contents } = await getAllNotes()
    expect(contents).toContain('HTML is easy')
  })

  test('nueva nota', async () => {
    const res = await api
      .post('/api/notes')
      .send(newNote)
      .expect(201)
      .expect('Content-Type', /application\/json/)
    expect(res.body.content).toBe(newNote.content)
    expect(res.body.title).toBe(newNote.title)
  })

  test('eliminando nota', async () => {
    const { resBody } = await getAllNotes()
    const noteToDelete = resBody[0]

    const res = await api
      .delete(`/api/notes/${noteToDelete._id}`)
      .expect(200)
    expect(res.body.content).toBe(noteToDelete.content)
    expect(res.body.title).toBe(noteToDelete.title)

    const { contents } = await getAllNotes()
    expect(contents).not.toContain(noteToDelete.content)
  })
})

beforeEach(async () => {
  await Note.deleteMany({})

  for (const note of initialNotes) {
    await new Note(note).save()
  }
})

afterAll(() => {
  moongose.connection.close()
  server.close()
})
