import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Counter from './components/Counter';
import Notes from './components/Notes';

import { initNotes } from './reducers/noteReducer';
import { getNotes } from './services/notes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNotes().then(notes => {
      dispatch(initNotes(notes));
    });
  }, [dispatch]);

  return (
    <>
      <Counter/><br /><br />
      <Notes/>
    </>
  )
}

export default App;
