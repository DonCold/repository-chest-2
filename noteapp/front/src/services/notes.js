import instance from './axios'

export const getAllNotes = async () => {
  const res = await instance.get('/notes')
  return res.data
}

export const submitNotes = async (noteToAddToState, { token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const res = await instance.post('/notes', noteToAddToState, config)
  return res.data
}
