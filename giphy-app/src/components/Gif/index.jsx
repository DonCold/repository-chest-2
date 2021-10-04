import React from 'react';

import { Link } from 'wouter'

import './gif.css';

const Gif = ({ id, title, url }) => {
  return (
    <Link to={`/gif/${ id }`} className='gif'>
        <img loading='lazy' src={ url } alt={ title } />
    </Link>
  )
}

export default Gif;
