import supertest from 'supertest'
import { app } from '../index'

export const api = supertest(app)

export const initialNotes = [
  {
    title: 'First note',
    content: 'HTML is easy',
    important: true
  },
  {
    title: 'Second note',
    content: 'Browser can execute only Javascript',
    important: false
  }
]

export const newNote = {
  title: 'Test note xD',
  content: 'Browser can execute only Javascript',
  important: false
}

export const getAllNotes = async () => {
  const res = await api.get('/api/notes')
  return {
    res,
    resBody: res.body,
    contents: res.body.map(note => note.content)
  }
}

export const getUsers = async (token) => {
  const res = await api.get('/api/users').set('Authorization', `Bearer ${token}`)
  return {
    res,
    resBody: res.body
  }
}
