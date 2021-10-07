import { API_KEY, API_URL } from './settings';

export const getSingleGif = async ({ id } = {}) => {
  const apiURL = `${API_URL}gifs/${id}?api_key=${API_KEY}`;

  const response = await fetch(apiURL);
  const res = await response.json();
  const { data } = res;

  const gif = {
    id: data.id,
    title: data.title,
    url: data.images.downsized_medium.url,
  }

  return gif;
}
