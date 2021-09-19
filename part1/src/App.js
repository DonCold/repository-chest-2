import { useState, useEffect } from 'react'
import './App.css';

import Notes from './components/Notes';
import Login from './components/Login';

import { setToken, submitNotes, token, getAllNotes} from './services/notes';
import FormNotes from './components/FormNotes';
import Togglable from './components/Togglable';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userSession = localStorage.getItem('user');
    if ( userSession ) {
      const userArray = JSON.parse(userSession);
      setUser(userArray);
      setToken(userArray.token);
    }
  }, []);

  const noteSubmit = async ( newNote ) => {
    const noteToAddToState = {
      title: newNote,
      content: newNote
    }

    await submitNotes( noteToAddToState, { token } );
    const newNotes = await getAllNotes();
    setNotes(newNotes);
  }

  return (
    <>
      {
      user
        ? <FormNotes sendNote={noteSubmit} setUser={ setUser } />
        : <Togglable showLabel="Login" hiddenLabel="Cancelar">
            <Login setUser={ setUser } />
          </Togglable>
      }
      <Notes notes={notes} setNotes={setNotes} setUser={ setUser } />
    </>
  );
}

export default App;
