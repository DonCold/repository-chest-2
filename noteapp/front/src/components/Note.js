const Note = ({ title, content, user }) => {
  return (
    <li>
      <p><strong>{ title }</strong>: { content } &gt; <small>{ user }</small></p>
    </li>
  )
}

export default Note
