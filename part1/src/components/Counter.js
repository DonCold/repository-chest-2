import { useState } from 'react';

import Mensaje from './Mensaje';

const Counter = ({ initial, color }) => {
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

  const total = counters.left + counters.right;
  const isEven = total % 2 === 0;
  const messagePar = isEven ? 'Es Par' : 'Es Impar';

  return (
    <>
      <Mensaje color={color} message={ messagePar } />
      { counters.left } - { counters.right } <strong>Total: { total }</strong>
      <br />
      <button onClick={ handlerClickLeft } >Izquierda</button>
      <button onClick={ handlerClickRight } >Derecha</button>
      <button onClick={ handlerReset } >Reset</button>
    </>
  )
};

export default Counter;
