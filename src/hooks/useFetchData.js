import { useEffect, useState } from 'react';

import fetchData from '../features/fetchData';

const useFetchData = () => {
  const [fetchedData, setfetchedData] = useState(null);
  const [query, setQuery] = useState(null);
  const [isBIttonClicked, setIsButtonClicked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query && isBIttonClicked) {
      fetchData(setError, query)
        .then(setfetchedData)
      setIsButtonClicked(false);
    }
    if (!query && isBIttonClicked) {
      fetchData(setError)
        .then(setfetchedData)
      setIsButtonClicked(false);
    }
  }, [isBIttonClicked, query, fetchedData]);

  console.log(`hookerror: ${error}`);

  return {
    fetchedData,
    setIsButtonClicked,
    error,
    setQuery,
  };
};

export default useFetchData;
