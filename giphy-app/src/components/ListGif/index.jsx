import React from 'react';

import Gif from '../Gif';

import './ListGif.css';

const ListGif = ({ gifs }) => {
  if (gifs.length === 0) return null;

  return (
    <div className='ListOfGifs'>
    {
      gifs?.map(gif =>
        <Gif
          key={ gif.id }
          id={ gif.id }
          title={ gif.title }
          url={ gif.url }
        />
      )
    }
    </div>
  )
}

export default ListGif;
