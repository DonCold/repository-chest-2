import React, { useCallback, useReducer } from 'react';
import { useLocation } from 'wouter';

import './FormGif.css';

const RATING = [
  'g',
  'pg',
  'pg-13',
  'r'
]

const ACTIONS = {
  QUERY: 'query',
  RATING: 'rating'
}

const reducer = (state, param) => {
  switch (param.type) {
    case ACTIONS.QUERY:
      return {
        ...state,
        query: param.payload,
        times: state.times + 1
      };
    case ACTIONS.RATING:
      return {
        ...state,
        rating: param.payload
      };
    default:
      return state;
  }
}

const FormGif = ({ initialQuery = '', initialRating = '' } = {}) => {
  const [_path, pushLocation] = useLocation();
  const [state, dispatch] = useReducer(reducer, {
    query: decodeURI(initialQuery),
    rating: initialRating,
    times: 0
  });

  const { query, rating } = state;

  const searchQuery = useCallback((query) => {
    if (query !== '') pushLocation(`/search/${query}/${rating}`);
  }, [pushLocation, query]);

  const handleQuery = (e) => {
    dispatch({
      type: ACTIONS.QUERY,
      payload: e.target.value
    });
  }

  const handleRating = (e) => {
    dispatch({
      type: ACTIONS.RATING,
      payload: e.target.value
    });
  }

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
