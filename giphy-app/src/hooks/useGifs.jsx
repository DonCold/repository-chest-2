import { useState, useEffect, useContext } from 'react';

import { getGifs } from '@/services/getGifs';

import GifsContext from '@/context/GifsContext';

export const useGifs = ( { query, limit } ) => {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true);

    async function data () {
      const queryFind = query || localStorage.getItem('lastQuery');
      const gifs = await getGifs({
        query: queryFind,
        limit,
      })

      setGifs(gifs);
      setLoading(false);
      if (queryFind) localStorage.setItem('lastQuery', queryFind);
    }

    data();
  }, [query]);

  return { loading, gifs };
}
