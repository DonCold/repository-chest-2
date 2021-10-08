import React, { useState, useCallback } from 'react';
import { useLocation } from 'wouter';

import './FormGif.css'

const RATING = [
  'g',
  'pg',
  'pg-13',
  'r'
]

const FormGif = ({ initialQuery = '', initialRating = '' } = {}) => {
  const [_path, pushLocation] = useLocation();
  const [query, setQuery] = useState(decodeURI(initialQuery));
  const [rating, setRating] = useState(initialRating);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }

  const handleRating = (e) => {
    setRating(e.target.value);
  }

  const searchQuery = useCallback((query) => {
    if (query !== '') pushLocation(`/search/${query}/${rating}`);
  }, [pushLocation, query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchQuery(query);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <select className="select" onChange={handleRating}  value={rating}>
        <option value='' disabled>Rating Type</option>
        {
          RATING.map(rating => (
            <option key={rating} value={rating}>{rating}</option>
          ))
        }
      </select>
      <input className="input" placeholder="Search" type="text" value={query} onChange={handleQuery} />
      <button className="button" type="submit">Buscar</button>
    </form>
  )
}

export default React.memo(FormGif);
