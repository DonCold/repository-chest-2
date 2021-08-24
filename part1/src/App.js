import { useState } from 'react';

import './App.css';

import Counter from './Counter';

const initial = {
  left: 0,
  right: 0
};

const App = () => {
  const [counters, setCounters] = useState(initial);

  const handlerClickLeft = () => {
    setCounters({
      ...counters,
      left: counters.left + 1
    });
  }

  const handlerClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1
    });
  }

  const handlerReset = () => {
    setCounters(initial);
  }

  const isEven = counters.counter % 2 === 0;
  const messagePar = isEven ? 'Es Par' : 'Es Impar'

  return (
    <>
      <Counter initial={ counters.left + counters.right } message={ messagePar } />
      <hr/>
      <Counter initial={ counters.left } /> - <Counter initial={ counters.right }/>
      <button onClick={ handlerClickLeft } >Izquierda</button>
      <button onClick={ handlerClickRight } >Derecha</button>
      <button onClick={ handlerReset } >Reset</button>
    </>
  );
}

export default App;
