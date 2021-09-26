import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

import User from './../models/User'

import { server } from '../index'
import { api, getUsers } from './helper'

describe('users', () => {
  let token = null

  test('should create User', async () => {
    const userDB = await User.find()
    const userAtStart = userDB.map(user => user.toJSON())

    const newUser = {
      name: 'Test',
      email: 'test@test.com',
      password: '123456'
    }

    const res = await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)
    token = res.body.token

    const { resBody } = await getUsers(token)
    expect(resBody.length).toBe(userAtStart.length + 1)

    const usernames = resBody.map(user => user.name)
    expect(usernames).toContain(newUser.name)
  })

  test('email is already taken', async () => {
    const { resBody } = await getUsers(token)

    const newUser = {
      name: 'Test 1',
      email: resBody[0].email,
      password: '1234567'
    }

    const result = await api.post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('email already exists')

    const { resBody: userAtEnd } = await getUsers(token)
    expect(userAtEnd.length).toBe(resBody.length)
  })

  test('correct login', async () => {
    const { resBody } = await getUsers(token)

    await api.post('/api/login').send({
      email: resBody[0].email,
      password: '123456'
    }).expect(200)
  })
})

beforeAll(async () => {
  mongoose.connect(process.env.MONGO_DB_URI_TEST)

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
  mongoose.connection.close()
  server.close()
})
