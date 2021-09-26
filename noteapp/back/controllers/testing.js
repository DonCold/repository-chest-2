import { Router } from 'express'

import { initialSetup } from '../libs/initialSetup'

const testRouter = Router()

testRouter.post('/reset', async (req, res) => {
  console.log('Hola')
  await initialSetup()
  res.status(204).end()
})

export default testRouter
