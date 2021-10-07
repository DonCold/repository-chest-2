import { useEffect, useRef } from 'react';

const useSEO = ({ title, description = 'hola' }) => {
  const prevTitle = useRef(document.title);
  const prevDesc = useRef(document.querySelector('meta[name="description"]').getAttribute('content'));

  useEffect(() => {
    if (!title) return;
    const previusTitle = prevTitle.current;
    document.title = title;

    return () => {
      document.title = previusTitle;
    }
  }, [title]);

  useEffect(() => {
    if (!description) return;
    const previusDesc = prevDesc.current;
    document.querySelector('meta[name="description"]').setAttribute('content', description);

    return () => {
      document.querySelector('meta[name="description"]').setAttribute('content', previusDesc);
    }
  }, [description]);
}

export default useSEO;
