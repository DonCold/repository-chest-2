import moongose from 'mongoose'
import bcrypt from 'bcrypt'
import User from './../models/User'

import { server } from '../index'
import { api } from './helper'

describe('users', () => {
  test('should create User', async () => {
    const userDB = await User.find()
    const userAtStart = userDB.map(user => user.toJSON())

    const newUser = {
      name: 'Test',
      email: 'test@test.com',
      password: '123456'
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const users = await User.find()
    const userAtEnd = users.map(user => user.toJSON())

    expect(userAtEnd.length).toBe(userAtStart.length + 1)

    const usernames = userAtEnd.map(user => user.name)
    expect(usernames).toContain(newUser.name)
  })
})

beforeEach(async () => {
  await User.deleteMany({})

  const passwordHash = await bcrypt.hash('123456', 10)
  const user = new User({
    name: 'John Doe',
    email: 'john@gmail.com',
    password: passwordHash
  })
  await user.save()
})

afterAll(() => {
  moongose.connection.close()
  server.close()
})
