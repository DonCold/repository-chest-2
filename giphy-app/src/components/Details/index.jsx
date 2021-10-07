import React from 'react';
import { Helmet } from 'react-helmet';

import { useSingleGif } from '@/hooks/useSingleGif';

const Details = ({ params }) => {
  const { id } = params;
  const { gif } = useSingleGif({ id });

  return (
    <div>
      {
        gif && <div>
          <Helmet>
            <title>{gif.title}</title>
          </Helmet>
          <strong>{gif.title}</strong><br />
          <img src={gif.url} alt={gif.title} />
        </div>
      }
    </div>
  )
}

export default Details;
