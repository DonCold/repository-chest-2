import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import './config'
import './database.js'
import { notFound } from './middlewares/notFound'

import noteRouter from './controllers/notes'
import userRouter from './controllers/user'
import loginRouter from './controllers/login'
import testRouter from './controllers/testing'

import { initialSetup } from './libs/initialSetup'

const app = express()

initialSetup()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

app.get('/', async (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.use('/api/notes', noteRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
app.use('/api/testing', testRouter)
app.use(notFound)

const server = app.listen(process.env.PORT || 3001, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3001}!`)
})

export { app, server }
