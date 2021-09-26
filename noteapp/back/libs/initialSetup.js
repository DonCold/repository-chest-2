import User from '../models/User'
import Note from '../models/Note'

export const initialSetup = async () => {
  if (process.env.NODE_ENV !== 'test') return
  await User.deleteMany({})
  await Note.deleteMany({})
}
