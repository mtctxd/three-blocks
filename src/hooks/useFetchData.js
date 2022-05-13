import { useEffect, useState } from 'react';

import fetchData from '../features/fetchData';

const useFetchData = () => {
  const [fetchedData, setfetchedData] = useState(null);
  const [query, setQuery] = useState(null);
  const [isBIttonClicked, setIsButtonClicked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query && isBIttonClicked) {
      fetchData(query)
        .then(setfetchedData)
        .then(() => setError(false))
        .catch(setError);
      setIsButtonClicked(false);
    }
    if (!query && isBIttonClicked) {
      fetchData('cklziyda30000m19k92zfao28-9430719080200028')
        .then(setfetchedData)
        .then(() => setError(false))
        .catch(setError);
      setIsButtonClicked(false);
    }
  }, [isBIttonClicked, query, fetchedData]);

  return {
    fetchedData,
    setIsButtonClicked,
    error,
    setQuery,
  };
};

export default useFetchData;
