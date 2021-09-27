import React from 'react';
import { useSelector } from 'react-redux';

import FormNote from './FormNote';

const Note = () => {
  const state = useSelector(state => state);

  return (
    <div>
      <FormNote/>
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
