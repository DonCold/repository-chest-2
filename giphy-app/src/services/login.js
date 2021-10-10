export const login = ({ username, password }) => {
  if (username === 'admin' && password === 'admin') {
    return {
      jwt: 'token-de-prueba'
    }
  }
  return {
    error: 'Credenciales incorrectas'
  }
}
