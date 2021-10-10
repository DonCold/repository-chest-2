import React, { useState } from 'react'
import { useLocation } from 'wouter'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, setLocation] = useLocation()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setLocation('/')
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="username"  value={username} onChange={handleUsernameChange} />
      <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
      <button>Login</button>
    </form>
  )
}

export default Login;
