const apiKey = import.meta.env.VITE_GIPHY_KEY;

export const getGifs = async ({ query = 'Luna', limit = 20 } = {}) => {
  if (query === '' || !query) return [];

  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`

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
