import React, { useState } from 'react';
import { useLocation } from 'wouter';

import ListGif from '../../components/ListGif/index';

import { useGifs } from '../../hooks/useGifs';

const Home = () => {
  const [query, setQuery] = useState('');
  const [_path, pushLocation] = useLocation();

  const { gifs } = useGifs({ limit: 2 });

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${query}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleQuery} />
        <button type="submit">Buscar</button>
      </form>
      <ListGif gifs={gifs} />
    </div>
  )
}

export default Home;
