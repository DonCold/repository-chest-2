import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from "redux";
import { Provider } from 'react-redux';

import { noteReducer } from './reducers/noteReducer';

import App from './App';

const store = createStore( noteReducer );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
