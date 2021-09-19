import moongose from 'mongoose'
import bcrypt from 'bcrypt'
import User from './../models/User'

import { server } from '../index'
import { api, getUsers } from './helper'

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

    const { resBody } = await getUsers()
    expect(resBody.length).toBe(userAtStart.length + 1)

    const usernames = resBody.map(user => user.name)
    expect(usernames).toContain(newUser.name)
  })

  test('email is already taken', async () => {
    const { resBody } = await getUsers()

    const newUser = {
      name: 'Test',
      email: resBody[0].email,
      password: '123456'
    }

    const result = await api.post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('email already exists')

    const { resBody: userAtEnd } = await getUsers()
    expect(userAtEnd.length).toBe(resBody.length)
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
