import moongose from 'mongoose'

import { server } from '../index'
import Note from '../models/Note'
import { initialNotes, api } from './helper'

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
    const res = await api.get('/api/notes')
    const contents = res.body.map(r => r.content)
    expect(contents).toContain('HTML is easy')
  })

  test('nueva nota', async () => {
    const newNote = {
      title: 'Test note',
      content: 'Browser can execute only Javascript',
      important: false
    }

    const res = await api
      .post('/api/notes')
      .send(newNote)
      .expect(201)
      .expect('Content-Type', /application\/json/)
    expect(res.body.content).toBe(newNote.content)
    expect(res.body.title).toBe(newNote.title)
  })
})

beforeEach(async () => {
  await Note.deleteMany({})

  const note1 = new Note(initialNotes[0])
  await note1.save()

  const note2 = new Note(initialNotes[1])
  await note2.save()
})

afterAll(() => {
  moongose.connection.close()
  server.close()
})
