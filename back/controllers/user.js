import { Router } from 'express'
import bcrypt from 'bcrypt'

import User from './../models/User'

import { Auth } from '../middlewares/auth'

const userRoute = Router()

userRoute.get('/', Auth, async (req, res) => {
  try {
    const users = await User.find().populate('notes', {
      title: 1,
      content: 1
    })
    res.json(users)
  } catch (error) {
    res.json({ error })
  }
})

userRoute.post('/', async (req, res) => {
  const { name, email, password } = req.body
  const hashPassword = await bcrypt.hash(password, 10)
  const newUser = new User({ name, email, password: hashPassword })

  newUser.save((err, user) => {
    if (err) {
      res.status(400).send({ error: 'email already exists' })
    }
    res.status(201).json(user)
  })
})

userRoute.get('/:id', Auth, (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.send(err)
    }
    res.json(user)
  })
})

userRoute.put('/:id', Auth, (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
    if (err) {
      res.send(err)
    }
    res.json(user)
  })
})

userRoute.delete('/:id', Auth, (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'User successfully deleted' })
  })
})

export default userRoute
