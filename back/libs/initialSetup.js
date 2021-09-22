import bcrypt from 'bcrypt'

import User from '../models/User'
import Note from '../models/Note'

export const initialSetup = async () => {
  if (process.env.NODE_ENV !== 'test') return
  await User.deleteMany({})
  await Note.deleteMany({})

  const userTest = new User({
    name: 'Test',
    email: 'test@test.com',
    password: await bcrypt.hash('123456', 10)
  })

  console.log(userTest)

  await userTest.save()
}
