import React, { useState } from 'react';
import Counter from './components/Counter';
import Note from './components/Note';

import { store } from './components/Note';

const App = () => {
  const [change, setChange] = useState(false);

  store.subscribe(() => {
    setChange(!change);
  })

  return (
    <>
      <Counter />
      <Note change={change}/>
    </>
  )
}

export default App
