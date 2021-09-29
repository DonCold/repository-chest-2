import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleImportant } from '../reducers/noteReducer';

const Note = ({ note }) => {
  const dispatch = useDispatch();

  const handleToggleImportantNote = (id) => {
    dispatch(toggleImportant(id));
  };

  return (
    <li onClick={() => handleToggleImportantNote(note.id)}>
      <strong>{ note.title }</strong>: { note.content } { note.important ? <small> =&gt; important</small> : '' }
    </li>
  );
}

export default Note;
