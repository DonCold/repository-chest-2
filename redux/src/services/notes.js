import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getNotes = async () => {
  const res = await api.get('/notes');
  return res.data;
}
