import React, { useState, useEffect } from 'react'
import { useLocation } from 'wouter'

import useUser from '@/hooks/useUser';

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, setLocation] = useLocation()
  const { login, isLogged } = useUser()

  useEffect(() => {
    if (isLogged) {
      onLogin && onLogin()
      setLocation('/')
    }
  }, [isLogged]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    login(username, password);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="username"  value={username} onChange={handleUsernameChange} /><br />
        <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} /><br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;
