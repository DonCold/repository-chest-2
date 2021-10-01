import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'

import NotesPage from './pages/NotesPage'
import NoteDetail from './components/NoteDetail'
import Login from './components/Login'

import { useUser } from './hook/useUser'
import { useNotes } from './hook/useNotes'

const Home = () => <h1>Home</h1>
const Users = () => <h1>Users</h1>

const padding = {
  padding: 5
}

const App = () => {
  const { notes, addNote, loadingNote } = useNotes()
  const { user, login, logout } = useUser()

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
          return user ? <Redirect to="/notes" /> : <Login user={user} login={login} />
        }} />
        <Route path="/notes/:noteId">
          <NoteDetail notes={notes} />
        </Route>
        <Route path="/notes">
          <NotesPage notes={notes} loading={loadingNote} addNote={addNote} user={user} logout={logout} />
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
