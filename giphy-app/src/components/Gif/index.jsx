import React from 'react';

import { Link } from 'wouter'

import './gif.css';

const Gif = ({ id, title, url }) => {
  return (
    <div className='Gif'>
      <Link to={`/gif/${ id }`} className='Gif-link'>
        <img loading='lazy' src={ url } alt={ title } />
      </Link>
    </div>
  )
}

export default Gif;
