/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'

import { setToken } from './services/notes'

import Notes from './pages/NotesPage'
import NoteDetail from './components/NoteDetail'
import Login from './components/Login'

const Home = () => <h1>Home</h1>
const Users = () => <h1>Users</h1>

const padding = {
  padding: 5
}

const App = () => {
  const [notes, setNotes] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userSession = localStorage.getItem('user')
    if (userSession) {
      const userArray = JSON.parse(userSession)
      setUser(userArray)
      setToken(userArray.token)
    }
  }, [])

  return (
    <Router>
      <header>
        <Link to="/" style={ padding }>Home</Link>
        <Link to="/notes" style={ padding }>Notes</Link>
        <Link to="/users" style={ padding }>Users</Link>
        {
          user ? <em>Logged as { user.user.name }</em> : <Link to="/login" style={ padding } >Login</Link>
        }
      </header>

      <Switch>
        <Route path="/login" render={() => {
          return user ? <Redirect to="/notes" /> : <Login user={user} setUser={setUser} />
        }} />
        <Route path="/notes/:noteId">
          <NoteDetail notes={notes} />
        </Route>
        <Route path="/notes">
          <Notes notes={notes} setNotes={setNotes} user={user} setUser={setUser} />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
