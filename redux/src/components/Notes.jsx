import React from 'react';
import { useSelector } from 'react-redux';

import FormNote from './FormNote';
import Note from './Note';

const Notes = () => {
  const state = useSelector(state => state.notes);

  const filterNotes = (value) => {}

  return (
    <div>
      <FormNote/>
      <div>
        all
        <input type="radio" name="filter" onChange={()=> {filterNotes('all')}} />
        important
        <input type="radio" name="filter" onChange={()=> {filterNotes('important')}} />
        not important
        <input type="radio" name="filter" onChange={()=> {filterNotes('notImportant')}} />
      </div>
      <ul>
        {
          state.map(note => (
            <Note key={note.id} note={note}/>
          ))
        }
      </ul>
    </div>
  );
}

export default Notes;
