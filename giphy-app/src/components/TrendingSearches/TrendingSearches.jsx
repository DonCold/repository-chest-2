import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';

import { getTrendingTerms } from '@/services/getTrendingTerms';
import { capitalize } from '@/libs/util';

import './trending.css';

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function fetchTrends() {
      const data = await getTrendingTerms();
      setTrends(data);
    }

    fetchTrends();
  }, [])

  return (
    <>
      <h3>Trending</h3>
      <ul className="Trending">
        {
          trends.map((trend) => (
            <li key={trend}>
              <Link to={`/search/${trend}`} className="link">
                { capitalize(trend) }
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default TrendingSearches;
