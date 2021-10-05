import { API_KEY, API_URL } from './settings';

export const getGifs = async ({ query = 'Luna', limit = 20, page = 0 } = {}) => {
  if (query === '' || !query) return [];

  const apiURL = `${API_URL}gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${ page * limit }&rating=g&lang=en`;

  const response = await fetch(apiURL);
  const res = await response.json();
  const { data } = res;

  const gifs = data.map(gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url
    }
  })

  return gifs;
}
