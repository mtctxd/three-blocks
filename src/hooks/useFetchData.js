import { useEffect, useState } from 'react';

import fetchData from '../features/fetchData';

const useFetchData = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [query, setQuery] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(isButtonClicked, query);

    if (isButtonClicked && query) {
      fetchData(setError, setFetchedData, query);
      setIsButtonClicked(false);
    }
    if (isButtonClicked && !query) {
      fetchData(setError, setFetchedData);
      setIsButtonClicked(false);
    }
  }, [isButtonClicked, query]);

  return {
    fetchedData,
    setIsButtonClicked,
    error,
    setQuery,
  };
};

export default useFetchData;
