import React from 'react';
import { createStore } from "redux";

import { noteReducer } from './reducers/noteReducer';

const store = createStore( noteReducer );

store.dispatch({
  type: '@notes/created',
  payload: {
    id: 1,
    title: 'Note 1',
    content: 'Note 1 content',
  }
})

store.subscribe(() => {})

const Note = () => {
  const state = store.getState();

  return (
    <ul>
      {
        state.map(note => (
          <li key={note.id}><strong>{ note.title }</strong>: { note.content }</li>
        ))
      }
    </ul>
  );
}

export default Note;
