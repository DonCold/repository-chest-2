import React from 'react';

import './gif.css';

const Gif = ({ id, title, url }) => {
  return (
    <a href={`#${id}`} className='gif'>
      <h1>{ title }</h1>
      <img src={ url } alt={ title } />
    </a>
  )
}

export default Gif;
