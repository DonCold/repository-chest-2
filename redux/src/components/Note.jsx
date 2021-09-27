import React from 'react';
import { createStore } from "redux";

import { noteReducer, createNote } from '../reducers/noteReducer';

export const store = createStore( noteReducer );

const Note = () => {
  const state = store.getState();

  const addNote = (e) => {
    e.preventDefault();
    const { target } = e;

    const content = target.note.value;
    store.dispatch(createNote(content));

    target.note.value = '';
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input type="text" name="note"/>
        <button type="submit">add</button>
      </form>
      <ul>
        {
          state.map(note => (
            <li key={note.id}><strong>{ note.title }</strong>: { note.content }</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Note;
