import React from 'react';

import ListGif from '@/components/ListGif';

import { useGifs } from '@/hooks/useGifs';

import { capitalize } from '@/libs/util';

const SearchResults = ({ params }) => {
  const { query } = params;
  const { loading, gifs } = useGifs({ query });

  if (loading) return <p>Loading...</p>;
  if (gifs.length === 0 || !gifs) return <p>No gifs found</p>;

  return (
    <>
      <h2>{ capitalize(decodeURI( query )) }</h2>
      <ListGif gifs={gifs} />
    </>
  )
}

export default SearchResults;
