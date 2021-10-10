import { useCallback, useContext } from 'react'
import Context from '@/context/UsersContext';
import { login as LoginService } from '@/services/login';

const useUser = () => {
  const { jwt, setJWT } = useContext(Context);

  const login = useCallback((username, password) => {
    const res = LoginService({ username, password });
    if (res.jwt) setJWT(res.jwt);
  }, [setJWT]);

  const logout = useCallback(() => {
    setJWT(null);
  }, [setJWT]);

  return {
    isLogged: !!jwt,
    login,
    logout,
  }
}

export default useUser;
