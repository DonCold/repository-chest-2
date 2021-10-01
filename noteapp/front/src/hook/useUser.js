import { useState, useEffect } from 'react'

import { setToken } from '../services/login'

export const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userSession = localStorage.getItem('user')
    if (userSession) {
      const userArray = JSON.parse(userSession)
      setUser(userArray)
      setToken(userArray.token)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('user')
    setToken(null)
    setUser(null)
  }

  const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
    setToken(user.token)
  }

  return {
    user,
    login,
    logout
  }
}
