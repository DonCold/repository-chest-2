const initialState = [
  {
    content: 'Primera Nota',
    important: false,
    id: 1,
    title: 'Primera Nota'
  }
];

export const noteReducer = (state = initialState, action) => {
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

export const createNote = (content) => {
  return {
    type: '@notes/created',
    payload: {
      id: Date.now(),
      title: 'Note ' + Date.now(),
      content,
      important: true
    }
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
