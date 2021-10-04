import React, { useContext } from 'react';

import GifsContext from '@/context/GifsContext';

const Details = ({ params }) => {
  const gifsContext = useContext(GifsContext);
  const { gifs } = gifsContext;

  const gif = gifs.find(gif => gif.id === params.id);

  return (
    <div>
      <strong>{gif.title}</strong><br />
      <img src={gif.url} alt={gif.title} />
    </div>
  )
}

export default Details;
