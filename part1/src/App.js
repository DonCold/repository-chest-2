import { useState, useEffect } from 'react'
import './App.css';

import Counter from './components/Counter';
import Notes from './components/Notes';
import Login from './components/Login';

import { setToken } from './services/notes';

const initial = {
  left: 0,
  right: 0
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userSession = localStorage.getItem('user');
    if ( userSession ) {
      const userArray = JSON.parse(userSession);
      setUser(userArray);
      setToken(userArray.token);
    }
  }, []);

  return (
    <>
      <Counter initial={ initial } color="red"/>
      <Counter initial={ initial } color="blue" />
      <hr/>
      <hr />
      {
        user ? <Notes setUser={ setUser } /> : <Login setUser={ setUser } />
      }
    </>
  );
}

export default App;
