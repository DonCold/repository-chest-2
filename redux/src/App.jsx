import React from 'react';

import { createStore } from "redux";

const counterReducer = (state = 0, action) => {
  const { type } = action;

  switch (type) {
    case "@counter/incremented":
      return state + 1;
    case "@counter/decremented":
      return state - 1;
    case "@counter/reset":
      return 0;
    default:
      return state;
  }
};

const actionIncremented = {
  type: "@counter/incremented"
};
const actionDecremented = {
  type: "@counter/decremented"
};
const actionReset = {
  type: "@counter/reset"
};

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(actionIncremented);
store.dispatch(actionIncremented);

store.subscribe(() => {
  console.log(store.getState());
});

const App = () => {
  return (
    <div>
      {store.getState()}
      <br />
      <button onClick={() => {store.dispatch(actionIncremented)}}>incrementar</button>
      <button onClick={() => {store.dispatch(actionDecremented)}}>decrementar</button>
      <button onClick={() => {store.dispatch(actionReset)}}>reset</button>
    </div>
  )
}

export default App
