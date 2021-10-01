import { useState } from 'react'

import { sendLogin, setToken } from '../services/login'
import { useHistory } from 'react-router-dom'

const Login = ({ user, login }) => {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await sendLogin({ email, password })
      setToken(user.token)
      login(user)
      history.push('/notes')

      window.localStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
      console.log(error)
    }
  }

  if (user) return <p>User is Logged</p>

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña"/>
        <button id="form-login-button" type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
