import React from 'react';

import ListGif from '../../components/ListGif';

import { useGifs } from '../../hooks/useGifs';

const SearchResults = ({ params }) => {
  const { query } = params;
  const { loading, gifs } = useGifs({ query });

  if (loading) return <p>Loading...</p>;
  if (gifs.length === 0 || !gifs) return <p>No gifs found</p>;

  return <ListGif gifs={gifs} />
}

export default SearchResults;
