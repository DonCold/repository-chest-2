import React, { Suspense } from 'react';

import useNearScreen from '@/hooks/useNearScreen';

const TrendingSearches = React.lazy(() => import('./TrendingSearches'));

const LazyTrendingSearches = () => {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={ fromRef } >
      <Suspense fallback={'Cargando..'}>
        { isNearScreen && <TrendingSearches /> }
      </Suspense>
    </div>
  )
}

export default LazyTrendingSearches;
