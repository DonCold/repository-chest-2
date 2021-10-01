import FetchNotes from './Fetch'

const Notes = ({ notes, loading }) => {
  return (
    <>
      <h1>Notas</h1>
      <FetchNotes notes={notes} loading={loading} />
    </>
  )
}

export default Notes
