import FetchNotes from './Fetch';
import Mensaje from './Mensaje';

const Notes = () => {

  return (
    <>
      <Mensaje  message="Notes" color="black" />
      <FetchNotes />
    </>
  )
}

export default Notes;
