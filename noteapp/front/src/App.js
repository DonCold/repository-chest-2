/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'

const Home = () => <h1>Home</h1>
const Notes = () => <h1>Notes</h1>
const Users = () => <h1>Users</h1>
const NotFound = () => <h1>404</h1>

const App = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    const { pathname } = window.location
    return pathname.substr(1) || 'home'
  })

  const getContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'notes':
        return <Notes />
      case 'users':
        return <Users />
      default:
        return <NotFound />
    }
  }

  const padding = {
    padding: '5px'
  }

  const toPage = page => event => {
    window.history.pushState(null, '', `/${page}`)
    event.preventDefault()
    setCurrentPage(page)
  }

  return (
    <div>
      <header>
        <a href="#" style={ padding } onClick={ toPage('home') }>Home</a>
        <a href="#" style={ padding } onClick={ toPage('notes') }>Notes</a>
        <a href="#" style={ padding } onClick={ toPage('users') }>Users</a>
      </header>
      {getContent()}
    </div>
  )
}

export default App
