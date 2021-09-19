import FetchNotes from './Fetch';

const Notes = ({ setUser, notes, setNotes }) => {

  return (
    <>
      <h1>Notas</h1>
      <FetchNotes notes={notes} setNotes={setNotes} setUser={ setUser }/>
    </>
  )
}

export default Notes;
