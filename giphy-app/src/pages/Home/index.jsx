import React, { useState } from 'react';
import { useLocation } from 'wouter';

import ListGif from '@/components/ListGif/index';
import TrendingSearches from '@/components/TrendingSearches/index';

import { useGifs } from '@/hooks/useGifs';

import './Home.css';

const Home = () => {
  const [query, setQuery] = useState('');
  const [_path, pushLocation] = useLocation();

  const { gifs } = useGifs({ limit: 10 });

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== '') pushLocation(`/search/${query}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="input" placeholder="Search" type="text" value={query} onChange={handleQuery} />
        <button className="button" type="submit">Buscar</button>
      </form>
      <br />
      <ListGif gifs={gifs} />
      <TrendingSearches />
    </div>
  )
}

export default Home;
