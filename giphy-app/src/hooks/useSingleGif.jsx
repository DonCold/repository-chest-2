import { useState, useEffect } from 'react';
import { useGifs } from './useGifs';
import { getSingleGif } from '@/services/getSingleGif';

export const useSingleGif = ({ id }) => {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find(gif => gif.id === id);

  const [gif, setGif] = useState(gifFromCache);

  useEffect(() => {
    if (gif) return;

    async function fetchGif() {
      const gif = await getSingleGif({ id });
      setGif(gif);
    }

    fetchGif();
  }, [])

  return { gif };
}
