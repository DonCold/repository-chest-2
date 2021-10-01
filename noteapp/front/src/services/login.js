import instance from './axios'

export let token = null

export const setToken = newToken => {
  token = newToken
}

export const sendLogin = async (data) => {
  const res = await instance.post('/login', data)
  return res.data
}
