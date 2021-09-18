import FetchNotes from './Fetch';
import Mensaje from './Mensaje';

const Notes = ({ setUser }) => {

  return (
    <>
      <Mensaje  message="Notes" color="black" />
      <FetchNotes setUser={ setUser }/>
    </>
  )
}

export default Notes;
