import { Router } from 'express'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from './../models/User'

const loginRoute = Router()

loginRoute.post('/', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(400).json({ error: 'User not found' })
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({ error: 'Invalid password' })
  }

  const token = jwt.sign({ id: user._id, name: user.name }, process.env.SECRET, {
    expiresIn: '1d'
  })

  return res.json({
    user,
    token
  })
})

export default loginRoute
