import React, { useState, useEffect } from 'react';

import { getTrendingTerms } from '@/services/getTrendingTerms';
import { capitalize } from '@/libs/util';

import { CategoryItem, CategoryList, CategoryLink, TitleH3} from './styles';

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
      <TitleH3>Trending</TitleH3>
      <CategoryList>
        {
          trends.map((trend) => (
            <CategoryItem key={trend}>
              <CategoryLink to={`/search/${trend}`} className="link">
                { capitalize(trend) }
              </CategoryLink>
            </CategoryItem>
          ))
        }
      </CategoryList>
    </>
  );
}

export default TrendingSearches;
