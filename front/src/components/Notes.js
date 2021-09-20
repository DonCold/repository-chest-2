import FetchNotes from './Fetch';

const Notes = ({ notes, setNotes }) => {

  return (
    <>
      <h1>Notas</h1>
      <FetchNotes notes={notes} setNotes={setNotes}/>
    </>
  )
}

export default Notes;
