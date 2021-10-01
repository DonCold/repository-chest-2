import { useHistory } from 'react-router-dom'

import { sendLogin, setToken } from '../services/login'

import { useField } from '../hook/useField'

const Login = ({ user, login }) => {
  const history = useHistory()

  const email = useField('text')
  const password = useField('password')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await sendLogin({ email: email.form.value, password: password.form.value })
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
        <input {...email.form} placeholder="Email" />
        <input {...password.form} placeholder="Contraseña"/>
        <button id="form-login-button" type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
