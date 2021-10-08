import React from 'react';
import { Helmet } from 'react-helmet';

import ListGif from '@/components/ListGif';
import TrendingSearches from '@/components/TrendingSearches';

import { useGifs } from '@/hooks/useGifs';

import FormGif from '@/components/FormGif';

const Home = () => {
  const { gifs } = useGifs({ limit: 20 });

  return (
    <div>
      <Helmet>
        <title>Giphy App</title>
      </Helmet>
      <FormGif/>
      <br />
      <ListGif gifs={gifs} />
      <TrendingSearches />
    </div>
  )
}

export default Home;
