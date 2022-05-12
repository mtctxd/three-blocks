import { useEffect, useState } from 'react';
import Canva from './components/Canva';
import UserInterface from './components/UserInterface';
import fetchData from './features/fetchData';

const App = () => {
  const [fetchedData, setfetchedData] = useState(null);
  const [query, setQuery] = useState(null);
  const [isBIttonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    if (query && isBIttonClicked) {
      fetchData(query).then(setfetchedData);
      setIsButtonClicked(false);
    }
    if (!fetchedData) {
      fetchData().then(setfetchedData);
    }
  }, [isBIttonClicked, query, fetchedData]);

  console.log(fetchedData);
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      <UserInterface
        userInterfaceHandlers={{ query, setQuery, setIsButtonClicked }}
        fetchedData={fetchedData}
      />
      {fetchedData && <Canva fetchedData={fetchedData.project} />}
    </div>
  );
};

export default App;
