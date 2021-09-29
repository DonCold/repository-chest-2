import React from 'react';
import { useDispatch } from 'react-redux';

import { submitNote } from '../reducers/noteReducer';

const FormNote = () => {
  const dispatch = useDispatch();

  const addNote = async (e) => {
    e.preventDefault();
    const { target } = e;

    const content = target.note.value;
    if (content!=='') dispatch(submitNote(content));

    target.note.value = '';
  }

  return (
    <form onSubmit={addNote}>
      <input type="text" name="note"/>
      <button type="submit">add</button>
    </form>
  )
}

export default FormNote;
