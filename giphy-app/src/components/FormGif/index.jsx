import React, { useState } from 'react';

const FormGif = ({ handleSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchQuery(query);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input className="input" placeholder="Search" type="text" value={query} onChange={handleQuery} />
      <button className="button" type="submit">Buscar</button>
    </form>
  )
}

export default React.memo(FormGif);
