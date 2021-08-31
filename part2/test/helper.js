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
