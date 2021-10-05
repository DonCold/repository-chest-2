import React from 'react';

import ListGif from '@/components/ListGif';

import { useGifs } from '@/hooks/useGifs';

import { capitalize } from '@/libs/util';

const SearchResults = ({ params }) => {
  const { query } = params;
  const { loading, loadingNextPage, gifs, setPage } = useGifs({ query, limit: 50 });

  const handleNextPage = () => {
    setPage(page => page + 1);
  }

  if (loading) return <p>Loading...</p>;
  if (gifs.length === 0 || !gifs) return <p>No gifs found</p>;

  return (
    <>
      <h2>{ capitalize(decodeURI( query )) }</h2>
      <ListGif gifs={gifs} />
      { loadingNextPage && <p>Loading...</p> }
      <br />
      <button onClick={handleNextPage} >Get Next Page</button>
    </>
  )
}

export default SearchResults;
