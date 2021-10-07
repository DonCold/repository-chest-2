import React from 'react';

import { Link } from 'wouter'

import './gif.css';

const Gif = ({ id, title, url }) => {
  return (
    <div className='Gif'>
      <Link to={`/gif/${ id }`} className='Gif-link'>
        <img src={ url } alt={ title } />
      </Link>
    </div>
  )
}

export default React.memo(Gif);
