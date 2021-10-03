import React, { useState, useEffect } from 'react';

import { getGifs } from '../services/getGifs';

import Gif from './Gif';

const ListGif = ({ params }) => {
  const [gifs, setGifs] = useState({ loading: false, results: [] });
  const { query } = params;

  useEffect(() => {
    setGifs({
      ...gifs,
      loading: true
    });

    async function data () {
      const gifs = await getGifs({
        query,
      })

      setGifs({
        loading: false,
        results: gifs
      });
    }

    data();
  }, [query]);

  if (gifs.loading) return <p>Loading...</p>;
  if (gifs.results.length === 0) return <p>No gifs found</p>;

  return (
    <>
    {
      gifs.results.map(gif =>
        <Gif
          key={ gif.id }
          id={ gif.id }
          title={ gif.title }
          url={ gif.url }
        />
      )
    }
    </>
  )
}

export default ListGif;
