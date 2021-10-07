import { useState, useEffect, useContext } from 'react';

import { getGifs } from '@/services/getGifs';

import GifsContext from '@/context/GifsContext';

const INITAL_PAGE = 0;
export const useGifs = ( { query, limit } = {}) => {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  const queryFind = query || localStorage.getItem('lastQuery');

  useEffect(() => {
    setLoading(true);

    async function data () {
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

  useEffect(() => {
    if (page === INITAL_PAGE || loading) return;
    setLoadingNextPage(true);

    async function data () {
      const gifs = await getGifs({
        query: queryFind,
        limit,
        page: page,
      });

      setGifs( prevGifs => [...prevGifs, ...gifs]);
      setLoadingNextPage(false);
    }

    data();
  }, [page])

  return {
    loading,
    loadingNextPage,
    gifs,
    setPage
  };
}
