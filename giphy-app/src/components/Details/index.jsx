import React from 'react';

import { useSingleGif } from '@/hooks/useSingleGif';
import useSEO from '@/hooks/useSEO';

const Details = ({ params }) => {
  const { id } = params;
  const { gif } = useSingleGif({ id });

  const title = gif ? (gif.title || 'Gif Details') : 'Details';
  useSEO({ title });

  return (
    <div>
      {
        gif && <div>
          <strong>{gif.title}</strong><br />
          <img src={gif.url} alt={gif.title} />
        </div>
      }
    </div>
  )
}

export default Details;
