import React, { useCallback } from 'react';
import { useLocation } from 'wouter';

import ListGif from '@/components/ListGif';
import TrendingSearches from '@/components/TrendingSearches';

import { useGifs } from '@/hooks/useGifs';

import './Home.css';
import FormGif from '@/components/FormGif';

const Home = () => {
  const [_path, pushLocation] = useLocation();
  const { gifs } = useGifs({ limit: 20 });

  const searchQuery = useCallback((query) => {
    if (query !== '') pushLocation(`/search/${query}`);
  }, [pushLocation]);

  return (
    <div>
      <FormGif handleSearchQuery={searchQuery} />
      <br />
      <ListGif gifs={gifs} />
      <TrendingSearches />
    </div>
  )
}

export default Home;
