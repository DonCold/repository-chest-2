import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getNotes = async () => {
  const res = await api.get('/notes');
  return res.data;
}

export const createNote = async (content) => {
  const note = {
    id: Date.now(),
    title: 'Note ' + Date.now(),
    content,
    important: false
  };
  const res = await api.post('/notes', note);
  return res.data;
}
