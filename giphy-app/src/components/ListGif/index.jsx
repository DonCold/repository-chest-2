import React from 'react';

import Gif from '../Gif';

const ListGif = ({ gifs }) => {
  return (
    <div>
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
