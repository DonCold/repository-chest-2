import { Router } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
    if (err) return res.status(400).send({ error: 'email already exists' })

    const token = jwt.sign({ id: user._id, name: user.name }, process.env.SECRET, {
      expiresIn: '1d'
    })

    res.status(201).json({ user, token })
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
