import { Link } from 'react-router-dom'

const Note = ({ id, title, content, user }) => {
  return (
    <li>
      <Link to={`/notes/${id}`}>
        <p><strong>{ title }</strong>: { content } &gt; <small>{ user }</small></p>
      </Link>
    </li>
  )
}

export default Note
