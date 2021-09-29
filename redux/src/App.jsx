import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Counter from './components/Counter';
import Notes from './components/Notes';

import { initNotes } from './reducers/noteReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initNotes());
  }, [dispatch]);

  return (
    <>
      <Counter/><br /><br />
      <Notes/>
    </>
  )
}

export default App;
