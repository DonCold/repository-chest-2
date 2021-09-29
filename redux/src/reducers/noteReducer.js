import { getNotes, createNote } from '../services/notes';

export const noteReducer = (state = [], action) => {
  if (action.type === '@notes/init') {
    return action.payload;
  }

  if (action.type === '@notes/created') {
    return state.concat(action.payload);
  }

  if(action.type === '@notes/toggleImportant') {
    return state.map(note => {
      if (note.id === action.payload.id) {
        return { ...note, important: !note.important };
      }
      return note;
    });
  }

  if(action.type === '@notes/edit') {
    return state.map(note => {
      if (note.id === action.payload.id) {
        return action.payload;
      }
      return note;
    });
  }

  return state;
}

export const submitNote = content => {
  return async dispatch => {
    const newNote = await createNote(content);

    dispatch({
      type: '@notes/created',
      payload: newNote
    });
  }
}

export const toggleImportant = (id) => {
  return {
    type: '@notes/toggleImportant',
    payload: {
      id
    }
  }
}

export const initNotes = () => {
  return async dispatch => {
    const notes = await getNotes();

    dispatch({
      type: '@notes/init',
      payload: notes
    });
  }
}
