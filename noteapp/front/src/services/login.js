import instance from './axios'

import { setToken } from './notes'

export const sendLogin = async (data) => {
  const res = await instance.post('/login', data)
  return res.data
}

export const handleLogout = (setUser) => {
  localStorage.removeItem('user')
  setToken(null)
  setUser(null)
}
