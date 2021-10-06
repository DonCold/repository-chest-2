import { useState, useEffect, useRef, useCallback } from 'react';
import debounce from 'just-debounce-it';

const useNearScreen = ({ distance = '100px', externalRef, once = true } = {}) => {
  const fromRef = useRef();
  const [isNearScreen, setIsNearScreen] = useState(false);

  const debounceSetIsNearScreen = useCallback(debounce(() => setIsNearScreen(true), 500), []);

  const onChange = (entries, observer) => {
    const el = entries[0];
    if (el.isIntersecting) {
      debounceSetIsNearScreen();
      once ? observer.disconnect() : setIsNearScreen(false);
    }
  };

  useEffect(() => {
    let observer;
    const element = externalRef ? externalRef.current : fromRef.current

    Promise.resolve(
      IntersectionObserver || import('intersection-observer')
    ).then(() => {
      const observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      if ( element ) observer.observe( element );
    })

    return () => observer && observer.disconnect();
  })

  return {
    isNearScreen,
    fromRef
  };
}

export default useNearScreen;
